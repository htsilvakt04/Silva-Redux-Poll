import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import DashBoard from './DashBoard';
import LeaderBoard from './LeaderBoard';
import Navbar from './shared/Navbar';
import AddPoll from './AddPoll';
import Poll from './Poll';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
    componentDidMount () {
        this.props.dispatch(handleInitialData());
    }

    render () {
        return (
            <Router>
                <Fragment>
                    <LoadingBar/>
                    {this.props.loading !== true &&
                    <div className="container">
                        <Navbar/>
                        <Switch>
                            <Route exact path='/' component={DashBoard}/>
                            <Route path='/leaderboard' component={LeaderBoard}/>
                            <Route path='/add-poll' component={AddPoll}/>
                            <Route path='/poll/:id' component={Poll}/>
                        </Switch>
                    </div>
                    }
                </Fragment>
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