import axios from 'axios';
import LocalStorageService from '../utils/localstorage';

axios.interceptors.request.use(
  config => {
      const token = LocalStorageService.getData('token');
      if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
      }
     config.headers['Content-Type'] = 'application/json';
      return config;
  },
  error => {
      Promise.reject(error)
  });

export const post = (url, data) => {
  return axios
    .post(url, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get = (url) => {
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

