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
		editGiphy(state, payload) {
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
		editGiphy({ state, commit }, payload) {
			let newList = [];
			state.list.forEach((el) => {
				if (payload.id == el.id){
					newList.push(payload);
				} else {
					newList.push(el);
				}
			})
			console.log(newList);
			commit('editGiphy', newList);	
		},
	},
};
