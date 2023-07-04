import { LazyExoticComponent, lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
// import { LazyPag1, LazyPag2, LazyPag3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLayout = lazy(
  () => import(/*webpackChunkName: "LazyLayout"*/ '../01-lazyload/layout/LazyLayout'),
);

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'LazyLayout',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No lazy',
  },
];
