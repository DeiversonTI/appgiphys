import axios from 'axios';
import state from '../store/state';
const base_url = 'https://api.giphy.com/v1/gifs';

const key = `?api_key=${state.key}`;

const getTrending = () => axios.get(`${base_url}/trending${key}&limit=${state.limit}&offset=${state.offset}`);

export default {
    getTrending,
}