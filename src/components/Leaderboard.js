import React, { Component } from 'react'
import UserProfile from './UserProfile'
import { connect } from 'react-redux'

class Leaderboard extends Component{
  render () {
    return (
      <div>
        <ul className='dashboard-list'>
          {this.props.userIds.map((id) => (
            <li key={id}>
              <UserProfile id = {id}  />
            </li>
            )
          )}
        </ul>
      </div>
      )
  }
}
function mapStateToProps ({authedUser,users, polls }) {
  return {
    userIds: Object.keys(users)
      .sort((b,a) => Object.keys(users[a]['answers']).length+users[a]['questions'].length-
       Object.keys(users[b]['answers']).length-users[b]['questions'].length)
  }
}

export default connect(mapStateToProps)(Leaderboard)