
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatPoll } from '../DataBase/helpers'
import { handleSaveAnswer } from '../actions/shared'


class PollPage extends Component{
  state = {
    selectedOption: '',
  }
  handleChange = (e) => {
    this.setState({
      selectedOption: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    const { dispatch,poll } = this.props
    console.log('id',poll.id)
    dispatch(handleSaveAnswer(poll.id,this.state.selectedOption))
  }
  render(){
    const { poll } = this.props
    if (!poll){
      return (<p>Poll doesn't exist</p>)
    }
    if (poll.hasVoted){
      const numVotes = poll.optionOne.votes.length + poll.optionTwo.votes.length
      const opOnePerc = poll.optionOne.votes.length
      const opTwoPerc = poll.optionTwo.votes.length
      return (
          <div className = 'poll'>
            <div className = 'poll-header'>
              <h5> {poll.authorName} asked</h5>
            </div>
            <div className = 'results'>
              <h3 className = 'center'>Would you rather ...</h3>
              <h4> Results:</h4>
              <label className = 'progress-bar'>
                <span>{poll.optionOne.text}:</span>
                <progress className = 'center'
                  value = {opOnePerc} 
                  max = {numVotes} >
                </progress>
                {opOnePerc} out of {numVotes} Votes ({Math.round(opOnePerc/numVotes*100)}%)
              </label>
              <label className = 'progress-bar'>
                <span>{poll.optionTwo.text}:</span>
                <progress className = 'center'
                  value = {opTwoPerc} 
                  max = {numVotes} >
                </progress>
                {opTwoPerc} out of {numVotes} Votes ({Math.round(opTwoPerc/numVotes*100)}%)
              </label>
            </div>

          </div>
        )
    }
    return (
        <div className = 'poll'>
          <div className = 'poll-header'>
            <h5> {poll.authorName} asked</h5>
          </div>
          
          <div className = 'poll-info center'>
            <form className='new-poll' onSubmit={this.handleSubmit}>
              <h3 className = 'center'>Would you rather</h3>
              <label>
                <input type="radio" 
                        name="optionOne" 
                        className = 'center'
                       value= 'optionOne'
                       checked={this.state.selectedOption === 'optionOne'}
                       onChange={this.handleChange} />
                {poll.optionOne.text}
              </label>

              <h4 className = 'center'>OR</h4>

              <label>
                <input type="radio" 
                        name="optionTwo" 
                        className = 'center'
                       value= 'optionTwo'
                       checked={this.state.selectedOption === 'optionTwo'}
                       onChange={this.handleChange} />
                {poll.optionTwo.text}
              </label>
              <button
                className='btn'
                type='submit'
                disabled={this.state.selectedOption === '' }>
                  Submit
              </button>
            </form>
          </div>
        </div>
      )
  }
}

function mapStateToProps({authedUser,users,polls},props){
  const { id } = props.match.params
  const poll = polls[id]
  if (!poll){
    console.log('nulllll')
    return {poll}
  }
  const author = users[poll.author]
  return {
    authedUser,
    poll: poll ? formatPoll(poll, authedUser, author) : null
  }
}

export default connect(mapStateToProps)(PollPage)