import { axiosClient } from '../utils';

const authService = {
  login: (username, password) => {
    axiosClient.post('/');
  },
};

export const { login } = authService;
