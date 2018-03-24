export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const POOL_ACTION = {
    receive: function (pools) {
        return {
            type: RECEIVE_POLLS,
            pools
        }
    }
};