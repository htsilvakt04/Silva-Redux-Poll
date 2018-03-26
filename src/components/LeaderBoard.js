import React from 'react';
import {connect} from 'react-redux';

function Leader(props) {
    let user = props.user;
    return (
        <li className="user">
            <img src={user.avatarURL} alt="user avatar"/>
            <div>
                <h1>{user.name}</h1>
                <p>{user.answers.length} answers</p>
                <p>{user.polls.length} polls</p>
            </div>
        </li>
    )
}

class LeaderBoard extends React.Component {

    render () {
        let users = this.props.users;
        return (
            <div>
                <ul>
                    {users.map(user => {
                        return (
                            <Leader key={user.id} user={user}/>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users: Object.keys(users).map(id => users[id])
    }
}

export default connect(mapStateToProps)(LeaderBoard);