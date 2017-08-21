// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import Routerapp from './components/routers/login/app';
// import Router from 'vue-router'


// Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  template: '<Routerapp/>',
  components: { Routerapp }
})


// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
