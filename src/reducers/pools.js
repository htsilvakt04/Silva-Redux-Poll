import {RECEIVE_POLLS} from '../actions/pools';

export default function pools (state = {}, action) {
    switch (action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.pools
            };
        default:
            return state;
    }
}
