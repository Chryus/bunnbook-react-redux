import { getAllBunnies } from '../api/BunnyApi';

export const loadBunniesSuccess = (bunnies) => {
  return {
    type: 'LOAD_BUNNIES_SUCCESS',
    bunnies
  };
};

export const loadBunnies = () => {
  return (dispatch) => {
    return getAllBunnies().then(bunnies => {
      debugger
      dispatch(loadBunniesSuccess(bunnies));
    }).catch(error => {
      throw(error);
    });
  };
};

