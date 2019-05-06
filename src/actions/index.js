import axios from 'axios';

const API_KEY = 'zH931mm1oAC1kVXsp2LBfgb55%2BZFsQNKQQpxMTo2XqeVsxMeA3bjw3aHIqZ5Hl0RhQZOCfB08mLPMzdTSsjjPw%3D%3D';
const API_KEYS = 'zH931mm1oAC1kVXsp2LBfgb55%2BZFsQNKQQpxMTo2XqeVsxMeA3bjw3aHIqZ5Hl0RhQZOCfB08mLPMzdTSsjjPw%3D%3D';
const ROOT_URL = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty';
const proxyurl = "https://cors-anywhere.herokuapp.com/";



export const FETCH_AIR = 'FETCH_AIR';
export const FETCH_INDEX = 'FETCH_INDEX';
export const FETCH_ADDRESS = 'FETCH_ADDRESS';

export function fetchAir(city) {
  const url = `${proxyurl}${ROOT_URL}?sidoName=${city}&ServiceKey=${API_KEY}&ver=1.3&numOfRows=100&_returnType=json`;
  const request = axios.get(url, {
    headers:{'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'},
  });
  return {
    type: FETCH_AIR,
    payload: request
  };
}

export function fetchIndex(index){
  return{
    type: FETCH_INDEX,
    index
  }
}

export function fetchAddress(station) {
  const url = `${proxyurl}http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getMsrstnList?stationName=${station}&ServiceKey=${API_KEYS}&_returnType=json`;
  const request = axios.get(url, {
    headers:{'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'},
  });
  return {
    type: FETCH_ADDRESS,
    payload: request
  };
}
