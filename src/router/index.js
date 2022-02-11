import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: '/register',
    name: "Register",
    component: Register,
    beforeEnter: () => {
      let user = store.getters.getLoggedInUser;
      if (store.getters.getToken && user.role === 'admin')  return true;
      return false;
    }
  },
  {
    path: '/login',
    name: "Login",
    component: Login,
    beforeEnter: () => {
      if(!store.getters.getToken) return true;
      return false;
    }
  },
  {
    path: '/dashboard',
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: () => {
      if (store.getters.getToken)  return true;
      return false;
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
