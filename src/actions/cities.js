import { addAsyncWorkingRequest, removeAsyncWorkingRequest } from '../../reducer/modules/systemWorking'
import { getCityList } from '../api/city';
import { setCityList } from '../reducer/modules/cities';

export const storeActions = {
  CITY_LIST: 'CITY_LIST',
}

export const setCityList = (list) => {
  return {
    type: storeActions.CITY_LIST,
    cities: list.data,
  }
}

export const resetReducer = () => {
  return {
    type: "RESET" }
}

export const getCityList = (data) => {
  return async function (dispatch) {
    try {
      dispatch(addAsyncWorkingRequest())
      const response = await getCatgoryListApi(data);
      dispatch(setCityList(response))
    } catch (error) {
      console.log('Error : ', error);
    } finally {
      dispatch(removeAsyncWorkingRequest())
    }
  }
}





