import React from 'react';
import App from '../App';
import staticRoutes from './staticRoutes.json';

export interface PrerenderRoute {
  path: string;
  Component: React.ComponentType<any>;
  props?: Record<string, unknown>;
}

export const prerenderRoutes: PrerenderRoute[] = (staticRoutes as Array<{ path: string }>).map((r) => {
  const isProject = r.path.startsWith('/project/');
  const projectSlug = isProject ? r.path.replace('/project/', '') : null;
  return {
    path: r.path,
    Component: App,
    props: { initialProjectSlug: projectSlug }
  };
});
