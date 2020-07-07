import { nasaAPI as api } from './api';
import moment from 'moment';

export const getData = async () => {
  try {
    let date = moment(new Date()).format('YYYY-MM-DD');
    const response = await api.get('/apod', {
      params: {
        api_key: 'u9IQsVELqAV4ajPMkjUEqlxyfAS6cbyJ4rrxCNvc',
        date: date,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
