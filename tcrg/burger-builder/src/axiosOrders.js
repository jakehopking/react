import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-6687b.firebaseio.com/',
})

export default instance;
