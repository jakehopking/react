import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID bfc62641f81d05b8f692934af236c888f8d089c57ee6abd1ef021db4676a687a'
  }
});