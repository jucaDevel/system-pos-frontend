import { createRouter, createWebHashHistory } from "vue-router"
import productsRouter from "@/modules/products/router"
import customerRouter from "@/modules/customers/router"
import categoryRouter from '@/modules/categories/router'
import userRouter from '@/modules/users/router'
import authRouter from '@/modules/auth/router'
import authGuard from "@/modules/auth/router/authGuard"

const routes = [
  {
    path: "/",
    name: "main",
    beforeEnter: [authGuard],
    component: () => import(/* webpackChunkName: "MainLayout" */ "../layouts/MainLayout.vue"),
    children:[
      {
        path: "/home",
        name:'home',
        beforeEnter: [authGuard],
        component: () => import(/* webpackChunkName: "HomeView" */ "../views/HomeView.vue"),
      },
      {
        path: "/products",
        beforeEnter: [authGuard],
        ...productsRouter,
      },
      {
        path: "/customers",
        beforeEnter: [authGuard],
        ...customerRouter,
      },
      {
        path:"/categories",
        beforeEnter: [authGuard],
        ...categoryRouter
      },
      {
        path:"/users",
        beforeEnter: [authGuard],
        ...userRouter
      }
    ]
  },
  {
    path: "/auth",
    ...authRouter,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.redirectToList)) {
      if (to.path === "/products") {
        next({ name: "list-product" });
      } else if (to.path === "/customers") {
        next({ name: "list-customers" });
      } else if (to.path === "/categories") {
        next({ name: "list-categories" });
      }else if (to.path === "/users") {
        next({ name: "list-users" });
      } else {
        next();
      }
    } else {
      next();
    }
});

export default router;
