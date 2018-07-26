import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import CollectionsList from '@/components/collections/Collections'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/collections/Collections',
      name: 'CollectionsList',
      component: CollectionsList
    }
  ]
})
