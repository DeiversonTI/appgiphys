import Vue from 'vue';
import Vuex from 'vuex';

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
			state.list = payload;
		},
	},
	actions: {
		async getGiphys({ commit }, payload) {
            let url = "https://api.giphy.com/v1/gifs/search?";
			let urlToFetch = url.concat(
				`api_key=${this.state.key}&limit=${this.state.limit}&offset=${this.state.offset}&q=${payload}&lang=pt`
			);

			await fetch(urlToFetch)
				.then((response) => response.json())
				.then((content) => {
					commit('setList', content.data);
				})
				.catch((err) => console.error(err));
		},
	},
});
