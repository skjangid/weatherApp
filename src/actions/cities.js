import {
  addAsyncWorkingRequest,
  removeAsyncWorkingRequest,
} from '../reducer/modules/systemWorking';
import {getCityListApi} from '../api/city';

export const storeActions = {
  CITY_LIST: 'CITY_LIST',
};

export const setCityList = list => {
  return {
    type: storeActions.CITY_LIST,
    cities: list.list,
  };
};

export const resetReducer = () => {
  return {
    type: 'RESET',
  };
};

export const getCityList = data => {
  return async function (dispatch) {
    try {
      dispatch(addAsyncWorkingRequest());
      const response = await getCityListApi(data);
      dispatch(setCityList(response));
    } catch (error) {
      console.log('Error : ', error);
    } finally {
      dispatch(removeAsyncWorkingRequest());
    }
  };
};
