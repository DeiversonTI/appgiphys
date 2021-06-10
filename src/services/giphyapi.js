import axios from 'axios';
const base_url = "https://api.giphy.com/v1/gifs/search?";

const key = `api_key=KuOjfeKF3VQCVK9PIsI33rzivmUlKkOF`;

const getGiphys = ({ limit = 9, offset, value }) => axios.get(`${base_url}${key}&limit=${limit}&offset=${offset}&q=${value}&lang=pt`);

export default {
    getGiphys,
}