export const RECEIVE_USERS = 'RECEIVE_USERS';
export const USER_ACTION = {
    receive: function (users) {
        return {
            type: RECEIVE_USERS,
            users
        }
    }
};