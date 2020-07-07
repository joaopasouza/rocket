import * as nasa from '../../services/nasaService';

export const list = () => {
  return (dispatch) => {
    nasa.getData().then((resp) => {
      console.log(resp);
      dispatch({
        type: 'NASA_PICTURE',
        payload: resp,
      });
    });
  };
};
