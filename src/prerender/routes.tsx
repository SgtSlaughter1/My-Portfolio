import React from 'react';
import App from '../App';
import staticRoutes from './staticRoutes.json';

export interface PrerenderRoute {
  path: string;
  Component: React.ComponentType<any>;
  props?: Record<string, unknown>;
}

export const prerenderRoutes: PrerenderRoute[] = (staticRoutes as Array<{ path: string }>).map((r) => ({
  path: r.path,
  Component: App,
  props: { initialPath: r.path },
}));
