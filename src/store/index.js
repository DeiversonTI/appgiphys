import Vue from 'vue';
import Vuex from 'vuex';

import GiphyApi from '@/services/giphyapi'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
		list: [],
        tmpList: [],

        limit: 15,
        offset: 0,
        key: 'KuOjfeKF3VQCVK9PIsI33rzivmUlKkOF',
	},
	mutations: {
        updateOffSet(state){
            state.offset += state.limit
        },
		setList(state, payload) {
			state.list.push(...payload);
		},
	},
	actions: {
		async getGiphys({ commit }, payload) {
            const giphysList = await GiphyApi.getGiphys({ limit: this.state.limit, offset: this.state.offset, value: payload })
            let list = giphysList.data.data;
            commit('setList', list);
            commit('updateOffSet');
		},
	},
});
