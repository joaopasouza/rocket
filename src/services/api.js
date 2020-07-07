import axios from 'axios';

const baseAPI = axios.create({
  baseURL: 'https://ntools-fake-rest.herokuapp.com',
});

const nasaAPI = axios.create({
  baseURL: 'https://api.nasa.gov/planetary',
});

export { baseAPI, nasaAPI };
