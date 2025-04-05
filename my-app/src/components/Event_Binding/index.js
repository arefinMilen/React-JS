import React, { Component } from 'react'

export default class index extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
      this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(){
        this.setState({
            count : this.state.count + 1
        })
    }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <buttion onClick={this.handleClick}>Increase</buttion>
      </div>
    )
  }
}
