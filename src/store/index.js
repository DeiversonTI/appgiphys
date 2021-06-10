import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import searcheds from './modules/searcheds';

export default new Vuex.Store({
   modules: {
    searcheds,
   }
});
