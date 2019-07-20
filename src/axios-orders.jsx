import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-87bb7.firebaseio.com/',
});

export default instance;