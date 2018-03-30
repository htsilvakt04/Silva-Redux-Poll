import {RECEIVE_USERS} from '../actions/users';
import {ADD_POLL} from '../actions/pools';
import {ADD_ANSWER} from '../actions/answer';
export default function users (state = {}, action) {

    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        case ADD_POLL:
            let pool = action.pool;
            let {id, author} = pool;
            return {
                ...state,
                [author]: {...state[author], polls: state[author].polls.concat([id])}
            };
        case ADD_ANSWER:
            let user = state[action.authedUser];
            let answers = user.answers;

            return {
                ...state,
                [action.authedUser]: {
                    ...user,
                    answers: answers.concat([action.id])
                }
            }
        default:
            return state;
    }
}