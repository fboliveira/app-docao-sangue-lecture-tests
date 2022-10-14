// https://axios-http.com/
// npm install axios  
import axios from 'axios';

const token = window.localStorage.getItem('token') || undefined;
const header = window.localStorage.getItem('prefix');

axios.defaults.headers.common["Authorization"] = `Bearer ${header} ${token}`;

console.log(`[Service: API] ${axios.defaults.headers.common["Authorization"]}`);

const api = axios.create({
    baseURL: 'http://localhost:4000'
});

export default api;