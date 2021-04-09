import { apiUrls } from './constants/constants'
import { doPost, doGet, doPatch } from '../actions/fetchApiActions';

export async function getCityListApi(data) {
  return await doGet(`${apiUrls.cityListApi}?data=${encodeURIComponent(JSON.stringify(data))}&access_token=${token() ? token() : ''}`)
}


