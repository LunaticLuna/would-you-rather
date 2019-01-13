import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserRadioButton extends Component{
  handleChange = (e) => {
    this.props.handleOptionChange(e.target.value)
  }
  render () {
    return (
      <div>
        <label>
          <input
            type="radio"
            name="UserRadioButton"
            value={this.props.id}
            checked={this.props.selected === this.props.id}
            onChange = {this.handleChange}
          />
          {this.props.id}
        </label>
      </div>
      )
  }
}

export default UserRadioButton