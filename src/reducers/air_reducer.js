import { FETCH_AIR } from '../actions';

function filterMangName(sites){
  return sites.mangName === '도시대기';
}

export default function(state = {
  loading: false, error: '', data: []
}, action) {
  console.log(action);
  switch (action.type) {
  case `${FETCH_AIR}_PENDING`:
    return {
      loading: true,
      error: '',
      data: [...state.data]
    };
  case `${FETCH_AIR}_FULFILLED`:
  console.log(action.payload);
    var city = {
      name: action.payload.data.parm.sidoName,
      sites: action.payload.data.list
      }
    var s = city.sites.filter(filterMangName);
    s.sort(function(s1, s2){
      if (s1.stationName > s2.stationName) { return 1; }
      if (s1.stationName < s2.stationName) { return -1; }
      return 0;
    })
    return {
      loading: false,
      error: '',
      data: [s]
    };
  case `${FETCH_AIR}_REJECTED`:
    return {
      loading: false,
      error: action.payload,
      data: [...state.data],
    };
  default:
    return state;
  }
}


