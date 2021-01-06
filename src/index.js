import './styles/index.scss';
import { routes } from './js/routes.js';
import Vue from 'vue';
import VueRouter from 'vue-router';

//import { Game } from './js/game';
import App from './js/app.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
