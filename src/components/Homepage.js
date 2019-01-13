import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import Radio from './AnsweredRadio'
import { Redirect } from 'react-router-dom'

class Homepage extends Component {
  state = {
    showAnswered : 'answered',
  }
  change = (selectOption) => {
    const showAnswered = selectOption
    this.setState(() => ({
      showAnswered
    }))
    // console.log('selectOption,',selectOption)
    // console.log('showAnswered',this.state.showAnswered)
  }
  render() {
    if (this.props.authedUser === ''){
      return (<Redirect to='/login' />)
    }
    return (
      <div>
        <Radio change = {this.change}/>
        <ul className='dashboard-list'>
          {this.props.pollIds.map((id) => (
            <li key={id}>
              <Poll id = {id} showAnswered = {this.state.showAnswered} />
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
    authedUser,
    pollIds: Object.keys(polls)
    .sort((a,b) => polls[b].timestamp - polls[a].timestamp)
  }
}

export default connect(mapStateToProps)(Homepage)
