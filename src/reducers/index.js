import authedUser from './authedUser';
import pools from './pools';
import users from './users';

import {combineReducers} from 'redux';

export default combineReducers({authedUser, pools, users});