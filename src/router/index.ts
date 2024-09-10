import { createRouter, createWebHashHistory } from 'vue-router';
import type { NProgressOptions } from 'nprogress';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Layout from '@/layout/index.vue';

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/',
    name: 'Layout',
    meta: { title: 'Home' },
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: { title: 'Home' },
        component: () => import('@/views/home-view/index.vue')
      },
      {
        path: '/about',
        name: 'About',
        meta: { title: 'About' },
        component: () => import('@/views/about-view/index.vue')
      },
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

NProgress.configure({ showSpinner: false } as NProgressOptions);

export const setupRouter = (app: any) => {
  router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
  });

  router.afterEach((to) => {
    NProgress.done();
  });

  app.use(router);
};

export default router;
