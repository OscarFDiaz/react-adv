import { LazyExoticComponent, lazy } from 'react';
// import { LazyPag1, LazyPag2, LazyPag3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Lazy1 = lazy(
  () => import(/*webpackChunkName: "LazyPage1"*/ '../01-lazyload/pages/LazyPag1'),
);
const Lazy2 = lazy(
  () => import(/*webpackChunkName: "LazyPage2"*/ '../01-lazyload/pages/LazyPag2'),
);
const Lazy3 = lazy(
  () => import(/*webpackChunkName: "LazyPage3"*/ '../01-lazyload/pages/LazyPag3'),
);

export const routes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'Lazy-1',
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: Lazy2,
    name: 'Lazy-2',
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: Lazy3,
    name: 'Lazy-3',
  },
];
