import { createRouter, createWebHashHistory } from "vue-router"
import productsRouter from "@/modules/products/router"
import customerRouter from "@/modules/customers/router"
import categoryRouter from '@/modules/categories/router'
import userRouter from '@/modules/users/router'

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  {
    path: "/products",
    ...productsRouter,
  },
  {
    path: "/customers",
    ...customerRouter,
  },
  {
    path:"/categories",
    ...categoryRouter
  },
  {
    path:"/users",
    ...userRouter
  }
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
