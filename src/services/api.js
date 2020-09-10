import axios from 'axios';

const api = axios.create({
  baseURL: 'http://appapi.polocaruaru.com.br/api/public/events',
});

export default api;