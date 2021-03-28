import Vue from 'vue'
import VueRouter from 'vue-router'

import PageSearchGiphy from '../components/SearchGiphys/PageSearchGiphy.vue'
import PageSavedGiphys from '../components/SavedGiphys/PageSavedGiphys.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/search'
  },
  {
    path: '/search',
    name: 'Search Giphy',
    component: PageSearchGiphy
  },
  {
    path: '/savedgiphys',
    name: 'Saved Giphys',
    component: PageSavedGiphys
  }
]

const router = new VueRouter({
  routes
})

export default router
