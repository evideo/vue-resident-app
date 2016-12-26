// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('es6-promise').polyfill()

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'


// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.


// sync the router with the vuex store.
// this registers `store.state.route`
//sync(store, router)



/* eslint-disable no-new
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

 */


// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.

// store.replaceState(window.__INITIAL_STATE__)

const app = new Vue({
  //
  // el: '#app',
  // template: '<App/>',
  // components: { App }
  router,
  store,
  ...App // Object spread copying everything from App.vue
}).$mount('#app')


// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store }

