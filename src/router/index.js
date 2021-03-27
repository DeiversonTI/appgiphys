import Vue from 'vue'
import VueRouter from 'vue-router'

import PageTrendigs from '../components/Trendings/PageTrendigs.vue'
import PageSearchGiphy from '../components/Search/PageSearchGiphy.vue'
import PageSavedGiphys from '../components/SavedGiphys/PageSavedGiphys.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageTrendigs
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
