export default {
	state: {
		list: [],
	},
	mutations: {
		insertGiphy(state, payload) {
			state.list.push(payload);
		},
		removeGiphy(state, payload) {
			state.list.splice(payload, 1);
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
			let index = state.list.indexOf(payload.id);
			commit('removeGiphy', index);
		},
		editGiphy({ commit }, payload){
			console.log('teste');
			console.log(payload);
			commit('');
		}
	},
};
