import {doGet} from '../actions/fetchApiActions';

export async function getCityListApi(data) {
  // return await doGet(`${apiUrls.cityListApi}?data=${encodeURIComponent(JSON.stringify(data))}&access_token=${token() ? token() : ''}`)
  return await doGet(
    'http://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&appid=efa008140f6b7c79734e48d7ad9d819e',
  );
}
