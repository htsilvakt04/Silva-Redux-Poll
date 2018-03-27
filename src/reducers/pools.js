import {RECEIVE_POLLS, ADD_POLL} from '../actions/pools';

export default function pools (state = {}, action) {
    switch (action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.pools
            };
        case ADD_POLL:
            return {
                ...state,
                [action.pool.id]: action.pool
            };
        default:
            return state;
    }
}
