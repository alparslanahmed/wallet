// First we need to import axios.js
import axios from 'axios';
import environment from './environment';
import {AsyncStorage} from 'react-native';

const instance = axios.create({
// .. where we make our configurations
    baseURL: environment.serverUrl,
});

AsyncStorage.getItem('token', (err, result) => {
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + result;
});

export default instance;
