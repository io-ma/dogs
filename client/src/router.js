import Vue from "vue";
import Router from "vue-router";
import AppHome from "./components/pages/AppHome";
import AppInspiration from "./components/pages/AppInspiration";
import AppDogs from "./components/pages/AppDogs";
import Callback from "./components/pages/Callback";
import auth from "./auth/authService";

Vue.use(Router);

const routes = [
    {
      path: "/",
      name: "app-home",
      component: AppHome
    },
    {
      path: "/inspiration",
      name: "app-inspiration",
      component: AppInspiration
    },
    {
      path: "/dogs",
      name: "app-dogs",
      component: AppDogs
    },
    {
      path: "/callback",
      name: "callback",
      component: Callback
    },
    {
      path: '*', redirect: '/'
    }
  ]

const router = new Router({
  mode: "history",
	routes
})

router.beforeEach((to, from, next) => {
  if (to.path === "/" || to.path === "/callback" || to.path === "/inspiration" || auth.isAuthenticated()) {
    return next();
  }
	auth.login({ target: to.path });
});

export default router;
