import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },  
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.name == "login") {
    //登录界面不设权限
    next()
  } else {
    //非登录界面才设置权限
    let token = localStorage.getItem("token")
    if (token) {
      //有权限的
       next()
    } else {
      //没有权限
      next({name:"login"})
    }
  }
})

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
