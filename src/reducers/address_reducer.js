import { FETCH_ADDRESS } from '../actions';


export default function(state = { addr: [] }, action) {
  console.log(action);
  switch (action.type) {
  case `${FETCH_ADDRESS}_PENDING`:
    return {
      addr: [...state.addr]
    };
  case `${FETCH_ADDRESS}_FULFILLED`:
  console.log("FETCH ADDRESS GOT: ", action.payload);
    var a = {
      xc: action.payload.data.list[0].dmX,
      yc: action.payload.data.list[0].dmY
      }
    return {
      addr: [a]
    };
  case `${FETCH_ADDRESS}_REJECTED`:
    return {
      addr: [...state.addr],
    };
  default:
    return state;
  }
}


