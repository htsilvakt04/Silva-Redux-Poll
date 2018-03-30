import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function Answer(props) {
    return (
        props.data.map( ({id, question}) => {
            return <Link to={{
                pathname: '/poll/' + id
            }} key={id}>{question}</Link>
        })
    )
}

class DashBoard extends React.Component {
    state = {
        showAnswered: false
    }
    handleToggle = () => {
        this.setState(() => ({showAnswered: !this.state.showAnswered}))
    }
    render () {
        let {showAnswered} = this.state;
        let {answered, unAnswered} = this.props;
        let data = showAnswered === true ? answered : unAnswered;

        return (
            <div>
                <div className="dashboard-toggle">
                    <button onClick={this.handleToggle} style={{textDecoration: showAnswered === true ? 'underline' : null}}>
                        Answer
                    </button>
                    <span>||</span>
                    <button onClick={this.handleToggle} style={{textDecoration: showAnswered !== true ? 'underline' : null}}>
                        Unanswered
                    </button>
                </div>
                <ul style={{textAlign: 'center'}} className="dashboard-list">
                    <Answer data={data}/>
                </ul>
            </div>
        )
    }
}

function mapStateToProps({users, pools, authedUser}) {
    let answers = users[authedUser].answers;

    let answered = answers.map(id => pools[id]).sort((a,b) => b.timestamp - a.timestamp);
    let unAnswered = Object.keys(pools).filter(id => !answers.includes(id)).map(id => pools[id]).sort((a,b) => {
        return b.timestamp - a.timestamp;
    });

    // the idea is to filter all answered && unAnswered question using the state above and pass those answers in to this component (just those answers)
    return {
        answered,
        unAnswered,
        authedUser
    }
}

export default connect(mapStateToProps)(DashBoard);