import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import store from "./store";
import "@/assets/main.css";
import AuthPlugin from "./plugins/auth";

Vue.config.productionTip = false;
Vue.use(AuthPlugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
