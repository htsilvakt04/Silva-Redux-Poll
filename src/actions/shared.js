import {getInitialData} from '../utils/api';
import {USER_ACTION} from './users';
import {POOL_ACTION} from './pools';
import {setAuthedUser} from './authedUser';
import {showLoading, hideLoading} from 'react-redux-loading';

const AUTHED_ID = 'tylermcginnis'; // we can get it from cookies (session ID)

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading());
        getInitialData()
            .then(({users, polls}) => {
                dispatch(USER_ACTION.receive(users));
                dispatch(POOL_ACTION.receive(polls));
                dispatch(setAuthedUser(AUTHED_ID));
                dispatch(hideLoading());
            })
            .catch((err) => {
                alert('Opps, database connection had had some issues')
            })
    }
}