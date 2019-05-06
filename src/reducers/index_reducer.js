import { FETCH_INDEX } from '../actions';

export default function(state = -1, action) {
	switch (action.type) {
		case FETCH_INDEX:
		console.log("INDEX_REDUCER GOT INDEX:", action.index)
			return action.index;

		default:
			return state
		}
}


