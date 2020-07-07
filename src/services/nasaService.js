import { nasaAPI as api } from './api';
import moment from 'moment';

export const getData = async () => {
  try {
    let date = moment(new Date()).format('YYYY-MM-DD');
    const response = await api.get('/apod', {
      params: {
        api_key: process.env.REACT_APP_NASA_API_KEY,
        date: date,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
