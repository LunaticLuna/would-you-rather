import React, { Component } from 'react'
import { connect } from 'react-redux'


class UserProfile extends Component{
  render () {
    const {user,numQ,numA} = this.props
    return (
      <div>

        <div className = 'poll'>
          <div className = 'poll-header center'>
            <h2> {user.name} </h2>
          </div>
          
          <div className = 'poll-info'>
            <h3 className = 'center'>Score : {numQ+numA}</h3>
            <h5 className = 'center'>Questions: {numQ}</h5>
            <h5 className = 'center'>Answers: {numA}</h5>
          </div>
        </div>

      </div>
      )
  }
}
function mapStateToProps({users},{id}){
  const user = users[id]
  return {
    user,
    numQ: user.questions.length,
    numA: Object.keys(user.answers).length,
  }
}
export default connect(mapStateToProps)(UserProfile)