import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import PageHome from '../components/pages/PageHome/PageHome.vue';
import PageSearch from '../components/pages/PageSearch/PageSearch.vue';
import PageSaved from '../components/pages/PageSaved/PageSaved.vue';

const router = new VueRouter({
  routes: [
    {path: '/', component: PageHome},
    {path: '/pesquisar', component: PageSearch},
    {path: '/salvos', component: PageSaved},
  ]
});

export default router