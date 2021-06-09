import GiphyApi from '@/services/giphysapi';

const state = () => ({
	list: [],
});

const mutations = {
	updateList(state, newList) {
		state.list = newList;
	},
};

const actions = {
	async getList({ commit }) {
		const giphysList = await GiphyApi.getTrending();
		let list = giphysList.data.data;
		commit('updateList', list);
	},
};

export default {
    state,
    mutations,
    actions
};