import React, { Component } from 'react'
import UserRadioButton from './UserRadioButton'
import { connect } from 'react-redux'
import { handleChangeAuthed } from '../actions/authedUser'

class LogIn extends Component{
  state = {
    selectedUser: this.props.authedUser
  }
  handleOptionChange = (id) => {
    this.setState(()=>({
      selectedUser:id}))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    if (this.props.authedUser){
      dispatch(handleChangeAuthed(''))
      // this.setState(()=>({
      //   selectedUser:''}))
    }else{
      dispatch(handleChangeAuthed(this.state.selectedUser))
      // this.setState(()=>({
      //   selectedUser:}))
    }
  }
  handleLogOut = () =>{
    const { dispatch } = this.props

    dispatch(handleChangeAuthed(''))
    this.setState(()=>({
      selectedUser:''}))
  }
  render () {
    if (!this.props.authedUser){
      return (
        <div>
          <div> Please Log In First </div>
      
          <form onSubmit = {this.handleSubmit}>
            {this.props.userIds.map((id) => (
              <UserRadioButton key = {id}
                id = {id} 
                selected = {this.state.selectedUser}
                handleOptionChange = {this.handleOptionChange} />
            ))}
            <button
              className='btn'
              type='submit'>
                {this.props.authedUser? ' Log Out' : 'Log In'}
            </button>
          </form>
        </div>
      )
    }else{
      return (
        <button
          className='btn'
          onClick = {this.handleLogOut}>
            Log Out
        </button>
      )
    }
  }
}

function mapStateToProps({authedUser,users}){
  return {
    authedUser,
    userIds: Object.keys(users),
  }
}

export default connect(mapStateToProps)(LogIn)