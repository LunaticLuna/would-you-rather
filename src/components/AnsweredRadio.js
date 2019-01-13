import React, { Component } from 'react'
class Radio extends React.Component {
  state = {
    selectedOption : 'answered',
  }
  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
    // console.log('changing radio button to',changeEvent.target.value)
    this.props.change(changeEvent.target.value)
  }
  render () {
    return (
      <form>
        <div >
          <label>
            <input
              type="radio"
              name="answered"
              value="answered"
              checked={this.state.selectedOption === 'answered'}
              onChange = {this.handleOptionChange}
            />
            answered
          </label>
        </div>

        <div >
          <label>
            <input
              type="radio"
              name="unanswered"
              value="unanswered"
              checked={this.state.selectedOption === 'unanswered'}
              onChange = {this.handleOptionChange}
            />
            unanswered
          </label>
        </div>

      </form>
      )
  } 
}

export default Radio

