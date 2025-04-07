import React, { Component } from 'react'

export default class index1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    handleIncrement = () => {
        this.setState ({
            count : this.state.count + 1
        })
    }
    
  render() {
    const {count} = this.state;
    
    return (

      <div>
       <h2>use hook state for class component</h2>
       <h3>count : {count}</h3>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}
