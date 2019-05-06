import { combineReducers } from 'redux';
import AirReducer from './air_reducer';
import IndexReducer from './index_reducer';
import AddressReducer from './address_reducer';

const rootReducer = combineReducers({
  air: AirReducer,
  index: IndexReducer,
  address: AddressReducer
});

export default rootReducer;