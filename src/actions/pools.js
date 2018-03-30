import {savePoll} from '../utils/api';
import {showLoading, hideLoading} from 'react-redux-loading';


export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const ADD_POLL = 'ADD_POLL';
export const VOTE_POLL = 'VOTE_POLL';

export const POOL_ACTION = {
    receive: function (pools) {
        return {
            type: RECEIVE_POLLS,
            pools
        }
    },
    save: function (pool) {
        return {
            type: ADD_POLL,
            pool
        }
    }
};

export function handleAddPool(pool) {
    return (dispatch, getState) => {
        dispatch(showLoading());

        const {authedUser} = getState();
        return savePoll({...pool, author: authedUser}).then(savedPool => {
            return dispatch(POOL_ACTION.save(savedPool));
        }).then(() => dispatch(hideLoading()))
    };
}

