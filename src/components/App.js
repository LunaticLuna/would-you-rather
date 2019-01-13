import React, {Component, Fragment} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Homepage from './Homepage'
import NewPoll from './NewPoll'
import PollPage from './PollPage'
import Leaderboard from './Leaderboard'
import LogIn from './LogIn'

import Nav from './Nav'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render () {
    return (
        <Router>
          <Fragment>
            <div className='container'>
              <Nav />
              {this.props.loading === true
                ? null
                : <div>
                    <Route path='/' exact component={Homepage} />
                    <Route path='/add' component={NewPoll} />
                    <Route path='/questions/:id' component={PollPage} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Route path='/login' component={LogIn} />
                  </div>}
              
            </div>
          </Fragment>
        </Router>


      )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)