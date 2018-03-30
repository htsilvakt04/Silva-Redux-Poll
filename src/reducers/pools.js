import {RECEIVE_POLLS, ADD_POLL} from '../actions/pools';
import {ADD_ANSWER} from '../actions/answer';

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
        case ADD_ANSWER:
            let { authedUser, id, answer} = action;
            let pool = state[id];
            let answerKey = answer + 'Votes';

            return {
                ...state,
                [id]: {
                    ...pool,
                    [answerKey]: pool[answerKey].concat([authedUser])
                }
            };
        default:
            return state;
    }
}
