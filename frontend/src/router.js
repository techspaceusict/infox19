import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Events from './views/Events.vue'
import Event from './views/Event.vue'
import Schedule from './views/Schedule.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
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
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    }
  ]
})
