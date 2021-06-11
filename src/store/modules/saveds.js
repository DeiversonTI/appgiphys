export default {
	state: {
		list: [],
	},
	mutations: {
		insertGiphy(state, payload) {
			state.list.push(payload);
		},
		removeGiphy(state, payload) {
			state.list = payload;
		},
	},
	actions: {
		saveGiphy({ commit }, payload) {
			let giphy = {
				url: payload.url,
				title: payload.title,
				import_data: payload.import_date,
				id: payload.id,
			};
			commit('insertGiphy', giphy);
		},
		removeGiphy({ state, commit }, payload) {
			let newList = state.list.filter((element) => {
				return element.id != payload;
			});
			commit('removeGiphy', newList);
		},
		editGiphy({ commit }, payload){
			console.log('teste');
			console.log(payload);
			commit('');
		}
	},
};
