import axios from 'axios';

export const axiosClient = axios.create({
  baseUrl: '/',
});

axiosClient.interceptors.request.use(
  config => {
    const accessToken = '';

    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  error => {
    Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  async error => {},
);

export default api;
