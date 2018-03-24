import {getInitialData} from '../utils/api';
import {USER_ACTION} from './users';
import {POOL_ACTION} from './pools';
import {setAuthedUser} from './authedUser';

const AUTHED_ID = 'tylermcginnis'; // we can get it from cookies (session ID)

export function handleInitialData () {
    return (dispatch) => {
        getInitialData()
            .then(({users, pools}) => {
                dispatch(USER_ACTION.receive(users));
                dispatch(POOL_ACTION.receive(pools));
                dispatch(setAuthedUser(AUTHED_ID));
            })
            .catch((err) => {
                alert('Opps, database connection had had some issues')
            })
    }
}