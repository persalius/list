import { type RouteConfig, index, layout } from '@react-router/dev/routes';

export default [
  layout('./widgets/layout/public-layout.tsx', [
    index('./pages/public/home.tsx'),
  ]),
] satisfies RouteConfig;
