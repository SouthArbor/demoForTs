import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
// import login from "../pages/login"
const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../pages/index.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../pages/cart.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login.vue")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes:routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from);
  next()
})

export default router