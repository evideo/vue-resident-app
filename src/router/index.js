import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Advertisement from '../views/Advertisement.vue'
import Portal from '../views/Portal.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // path: '/detail/:id',
      component: Advertisement, Portal
    }
  ]
})
