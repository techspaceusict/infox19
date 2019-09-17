import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Events from './views/Events.vue'
import Event from './views/Event.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/events/:eventName',
      name: 'event',
      component: Event
    },
  ]
})
