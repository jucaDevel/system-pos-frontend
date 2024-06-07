import { createRouter, createWebHashHistory } from 'vue-router'
import productsRouter from '@/modules/products/router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path:'/products',
    ...productsRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/products') {
      next({ name: 'list-product' });
  } else {
      next();
  }
});

export default router
