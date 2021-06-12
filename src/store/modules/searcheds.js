import GiphyApi from '@/services/giphyapi'

export default {
    state: {
		list: [],

        valueToSearch: "",

        limit: 6,
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
        resetList(state){
            state.list = [];
        },
        setValueToSearch(state, payload){
            state.valueToSearch = payload;
        }
	},
	actions: {
		async getGiphys({ state, commit }) {
            const giphysList = await GiphyApi.getGiphys({ limit: state.limit, offset: state.offset, value: state.valueToSearch })
            let list = giphysList.data.data;
            commit('setList', list);
            commit('updateOffSet');
		},
	},
}
