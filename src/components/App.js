import React, { Component } from 'react'
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';

import DashBoard from './DashBoard';
import Loading from './shared/Loading';



class App extends Component {
    componentDidMount () {
        this.props.dispatch(handleInitialData());
    }

    render () {
        
        if (this.props.loading) {
            return <Loading/>;
        }


        return (
            <DashBoard/>
        )

    }
}
function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}
export default connect(mapStateToProps)(App);

