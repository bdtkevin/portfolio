import axios from 'axios';

const request = (options) => {
  return axios({
    ...options,
    baseURL: process.env.REACT_APP_API_PATH_DEV,
  });
};

export { request };
