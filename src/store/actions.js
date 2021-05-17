import GiphyApi from '@/services/giphysapi'

import { state } from '@/store/'

export default {
    async getTrending() {
        try {
            const giphysList = await GiphyApi.getTrending();
            let list = giphysList.data.data
            console.log(list);
            state.list.push(...list);
        } catch (err){
            console.error(err);
        }
    }
};