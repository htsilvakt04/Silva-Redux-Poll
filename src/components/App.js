import React, { Component } from 'react'
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import DashBoard from './DashBoard';
import LeaderBoard from './LeaderBoard';
import Navbar from './shared/Navbar';
import AddPoll from './AddPoll';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
    componentDidMount () {
        this.props.dispatch(handleInitialData());
    }

    render () {
        
        if (this.props.loading) {
            return <LoadingBar/>;
        }

        return (
            <Router>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={DashBoard}/>
                        <Route path='/leaderboard' component={LeaderBoard}/>
                        <Route path='/add-poll' component={AddPoll}/>
                    </Switch>
                </div>
            </Router>

        )

    }
}
function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}
export default connect(mapStateToProps)(App);

