import React from 'react';
import {connect} from 'react-redux';
import {getPercentage} from '../utils/helpers';
import {handleAddAnswer} from '../actions/answer';
import {Link} from 'react-router-dom';
const getVoteKeys = () => ['aVotes','bVotes','cVotes','dVotes'];


function AnswerList(props) {
    let didClick = false;
    let {pool, onClick, vote} = props;

    let totalVotes = getVoteKeys().reduce(
        (vote, key) => vote + pool[key].length,
        0
    );

    return (
        <ul>
            {['aText', 'bText', 'cText', 'dText'].map((item) => {
                let count = pool[item[0] + 'Votes'].length;
                let percentage = getPercentage(count, totalVotes);

                return (
                    <li onClick={(event) => {
                        if ( vote === null && !didClick) {
                            didClick = true;
                            return onClick(event);
                        }
                    }}
                        className={`option ${ vote === item[0] ? 'chosen' : ''}`} id={item[0]} key={item} >
                            {vote === null
                                ? pool[item]
                                : <div className="result">
                                    <span>{pool[item]}</span>
                                    <span>
                                        {percentage}%
                                        ({count})
                                    </span>
                                </div>
                            }
                    </li>
                )
            })}
            {vote !== null &&
                <div style={{textAlign: 'center', marginTop: '25px'}}>
                    <Link className="btn" to="/">Back</Link>
                </div>
            }
        </ul>
    )
}

class Poll extends React.Component {
    handleClick = (event) => {
        let answer = event.currentTarget.id;
        let {pool, authedUser} = this.props;
        this.props.dispatch(
            handleAddAnswer({authedUser, id: pool.id, answer})
        );




    }
    render () {
        let {pool, owner, vote} = this.props;
        if (pool === null) {
            return <p>404</p>
        }

        return (
            <div className="poll-container">
                <h1 className="question">{pool.question}</h1>
                <div className="poll-author">
                    By <img src={owner.avatarURL} alt="User Avatar"/>
                </div>
                <AnswerList pool={pool} onClick={this.handleClick} vote={vote} answered={this.answered}/>
            </div>
        )
    }
}
function mapStateToProps({authedUser, pools, users}, currentProps) {
    let {id} = currentProps.match.params;
    let pool = pools[id];
    if (!pool) {
        return {
            pool: null
        }
    }

    let owner = users[pool.author];

    let vote = getVoteKeys().reduce((vote, key) => {
       if (vote !== null) {
           return vote[0];
       }
        return pool[key].includes(authedUser) ? key : vote;
    }, null);


    return {
        authedUser,
        pool,
        owner,
        vote
    }
}
export default connect(mapStateToProps)(Poll);