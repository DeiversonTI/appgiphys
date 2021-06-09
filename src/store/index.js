import Vue from 'vue';
import Vuex from 'vuex';

import trendings from './modules/trendings'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
        trendings
    }
});