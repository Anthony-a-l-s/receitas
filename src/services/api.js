import axios from 'axios';

//para rodar a api: json-server --whatch -d 180 --host 192.168.100.14(seu ip) db.json

const api = axios.create({
    baseURL: 'http://192.168.100.14:3000/'
})

export default api;
