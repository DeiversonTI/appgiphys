import Vue from 'vue';
import Vuex from 'vuex';

import GiphyApi from '@/services/giphysapi';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		key: 'KuOjfeKF3VQCVK9PIsI33rzivmUlKkOF',
		list: [],
		saveds: [],
		limit: 16,
		offset: 0,
	},
    mutations: {
        updateList(state, newList){
            state.list = newList;
        }
    },
    actions: {
        async getTrending(context) {
            try {
                const giphysList = await GiphyApi.getTrending();
                let list = giphysList.data.data
                context.commit('updateList', list);
            } catch (err){
                console.error(err);
            }
        },
    }
});
