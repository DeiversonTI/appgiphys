import axios from 'axios';
const base_url = 'https://api.giphy.com/v1/gifs';

const key = `?api_key=KuOjfeKF3VQCVK9PIsI33rzivmUlKkOF`;

const getTrending = () => axios.get(`${base_url}/trending${key}&limit=16&offset=0`);

export default {
    getTrending,
}