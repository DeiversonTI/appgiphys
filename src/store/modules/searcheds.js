import GiphyApi from '@/services/giphyapi'

export default {
    state: {
		list: [],
        tmpList: [],

        limit: 9,
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
        }
	},
	actions: {
		async getGiphys({ state, commit }, payload) {
            const giphysList = await GiphyApi.getGiphys({ limit: state.limit, offset: state.offset, value: payload })
            let list = giphysList.data.data;
            commit('setList', list);
            commit('updateOffSet');
		},
	},
}
