import GiphyApi from '@/services/giphysapi'

//import state from '@/store/state'

export default {
    async getTrending() {
        try {
            const giphysList = await GiphyApi.getTrending();
            return giphysList.data.data;
        } catch (err){
            console.error(err);
        }
    }
};