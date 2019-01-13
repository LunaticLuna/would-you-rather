import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatPoll } from '../DataBase/helpers'
import { Link, withRouter } from 'react-router-dom'

class Poll extends Component{
  render () {
    const { poll,showAns } = this.props

    if (!poll) {
      return <p>This Poll doesn't exist</p>
    }
    console.log(poll,poll.hasVoted,showAns)
    if (poll.hasVoted !== showAns){
      return null
    }
    return (
      <div className = 'poll'>
        <div className = 'poll-header'>
          <h5> {poll.authorName} asked</h5>
        </div>
        
        <div className = 'poll-info'>
          <h3 className = 'center'>Would you rather</h3>
          <h5 className = 'center'>{poll.optionOne.text}</h5>
          <h4 className = 'center'>OR </h4>
          <h5 className = 'center'>{poll.optionTwo.text}</h5>
          <Link
            to={`/questions/${poll.id}`}
            className = 'btn center' >
            View Poll
          </Link>
        </div>
      </div>

      )
  }
}

function mapStateToProps({authedUser,users,polls},{id,showAnswered}){
  const poll = polls[id]
  if (!poll){
    return {poll}
  }
  const author = users[poll.author]
  console.log('showAnswered',showAnswered)
  return {
    authedUser,
    showAns: showAnswered === 'answered',
    poll: poll ? formatPoll(poll, authedUser, author) : null
  }
}
export default withRouter(connect(mapStateToProps)(Poll))