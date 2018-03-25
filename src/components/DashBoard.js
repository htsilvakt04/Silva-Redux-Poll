import React from 'react';
import {connect} from 'react-redux';

function DashBoard (props) {
    return (
        <div>
            <h1>DashBoard</h1>
        </div>
    )
}

function mapStateToProps({users, pools, authedUser}) {
    debugger;

    // the idea is to filter all answered && unAnswered question using the state above and pass those answers in to this component (just those answers)
    return {
        users,
        pools,
        authedUser
    }
}

export default connect(mapStateToProps)(DashBoard);