import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('pages/IndexPage.vue'),
        meta: {},
      },
      {
        path: 'profile',
        name: 'UserProfile',
        component: () => import('pages/UserProfile.vue'),
        meta: {},
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
