import axios from 'axios';

const client = axios.create({
  baseURL: process.env.API_ROOT,
  headers: {
    'x-access-token': process.env.API_ACCESS_TOKEN,
  },
});

export default client;
