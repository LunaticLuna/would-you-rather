import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddPoll } from '../actions/polls'

class NewPoll extends Component{
  state = {
    optionOne : '',
    optionTwo : '',
    toHome: false,
  }
  handleOpOneChange = (e) => {
    const optionOne = e.target.value
    this.setState(()=>({
      optionOne
    }))
  }
  handleOpTwoChange = (e) => {
    const optionTwo = e.target.value
    this.setState(()=>({
      optionTwo
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOne, optionTwo} = this.state
    const { dispatch } = this.props
    console.log('logloglog',(optionOne === '') && (optionTwo === ''))

    dispatch(handleAddPoll(optionOne,optionTwo))
    this.setState(() => ({
      optionOne : '',
      optionTwo : '',
      toHome: true,
    }))


  }
  render () {
    const {optionOne,optionTwo,toHome} = this.state
    if (toHome === true){
      return <Redirect to ='/' />
    }
    if (this.props.authedUser === ''){
      return (<Redirect to='/login' />)
    }
    return (
      <div>
        <h3 className='center'>Create New Question</h3>
        <h5 className='center'>Would you rather...</h5>
        <form className='new-poll' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Enter Option one"
            value={optionOne}
            onChange={this.handleOpOneChange}
            className='textarea'
            maxLength={280}
          />
          <h5 className='center'>OR</h5>
          <textarea
            placeholder="Enter Option Two"
            value={optionTwo}
            onChange={this.handleOpTwoChange}
            className='textarea'
            maxLength={280}
          />
          
          {console.log('logloglog',(optionOne === '') && (optionTwo === ''))}
          <button
            className='btn'
            type='submit'
            disabled={(optionOne === '') || (optionTwo === '') }>
              Submit
          </button>
        </form>

      </div>

      )
  }
}
function mapStateToProps({authedUser}){
  return {
    authedUser,
  }
}
export default connect(mapStateToProps)(NewPoll)