import Vue from 'vue';
import store from './store/index.js';
import router from './router.js';
import App from './app.vue';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
