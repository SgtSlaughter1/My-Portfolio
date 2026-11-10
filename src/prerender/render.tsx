import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';

export interface RenderInput {
  path: string;
  Component: React.ComponentType<any>;
  props?: Record<string, unknown>;
}

export interface RenderOutput { bodyHtml: string; headHtml: string; }

export async function renderRoute(input: RenderInput): Promise<RenderOutput> {
  const helmetContext: { helmet?: any } = {};

  // Force HelmetProvider into SSR mode
  const prevCanUseDOM = (HelmetProvider as any).canUseDOM;
  (HelmetProvider as any).canUseDOM = false;

  try {
    let bodyHtml = renderToString(
      <HelmetProvider context={helmetContext}>
        <input.Component {...(input.props ?? {})} />
      </HelmetProvider>
    );

    const extractedHead: string[] = [];

    // React 19 hoists <title>, <meta>, and <link> to the start of renderToString output.
    const leadingHeadPattern = /^(?:<(?:title>[^<]*<\/title|meta\b[^>]*\/?|link\b[^>]*\/?)>)+/i;
    const leadingMatch = bodyHtml.match(leadingHeadPattern);
    if (leadingMatch) {
      const tags = leadingMatch[0].match(/<(?:title>[^<]*<\/title|meta\b[^>]*\/?|link\b[^>]*\/?)>/gi) ?? [];
      extractedHead.push(...tags);
      bodyHtml = bodyHtml.slice(leadingMatch[0].length);
    }

    // Extract JSON-LD scripts rendered in the component tree into <head>.
    const jsonLdPattern = /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi;
    const jsonLdMatches = bodyHtml.match(jsonLdPattern);
    if (jsonLdMatches) {
      extractedHead.push(...jsonLdMatches);
      bodyHtml = bodyHtml.replace(jsonLdPattern, '');
    }

    const h = helmetContext.helmet;
    const helmetParts = h
      ? [h.title?.toString(), h.meta?.toString(), h.link?.toString(), h.script?.toString()].filter(Boolean)
      : [];
    const headHtml = [...helmetParts, ...extractedHead].filter(Boolean).join('\n  ');
    return { bodyHtml, headHtml };
  } finally {
    (HelmetProvider as any).canUseDOM = prevCanUseDOM;
  }
}

const DEFAULT_HEAD_PATTERNS: RegExp[] = [
  /<title>[^<]*<\/title>/i,
  /<meta\s+name="title"[^>]*>/i,
  /<meta\s+name="application-name"[^>]*>/i,
  /<meta\s+name="description"[^>]*>/i,
  /<meta\s+name="keywords"[^>]*>/i,
  /<meta\s+property="og:[^"]*"[^>]*>/gi,
  /<meta\s+name="twitter:[^"]*"[^>]*>/gi,
  /<link\s+rel="canonical"[^>]*>/gi,
  /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi,
];

export function injectIntoTemplate(
  template: string,
  parts: { headHtml: string; bodyHtml: string }
): string {
  let html = template;
  for (const re of DEFAULT_HEAD_PATTERNS) html = html.replace(re, '');
  html = html.replace('</head>', `${parts.headHtml}\n</head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${parts.bodyHtml}</div>`);
  return html;
}
