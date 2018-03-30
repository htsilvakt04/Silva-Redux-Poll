import {savePollAnswer} from '../utils/api';
import {showLoading, hideLoading} from 'react-redux-loading';

export const ADD_ANSWER = 'ADD_ANSWER';

export const ANSWER = {
    add: ({authedUser, id, answer}) => {
        return {
            type: ADD_ANSWER,
            authedUser,
            id,
            answer
        }
    }
}

export function handleAddAnswer(data) {
    return (dispatch, getState) => {
        dispatch(showLoading());

        return  savePollAnswer(data).then((answer) => {
            dispatch(
                ANSWER.add(data)
            );
            dispatch(hideLoading());
            return answer;
        });

    };
}