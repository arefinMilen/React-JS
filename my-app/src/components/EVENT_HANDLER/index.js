import React, { Component } from 'react'

export default class index extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            changed : ''
      }
    }
    
    handleOnChange= (e) =>{
        this.setState({
            changed : e.target.value
        },() => {
            console.log(this.state.changed)
        })
        // console.log(e.target.value)   
    }
  render() {
    return (
      <div>
        <h2>Even Handler</h2>
        <input type ="text" placeholder='Enter your name' onChange={this.handleOnChange}/>
        <p>{this.state.changed}</p>
        <br/>
        <br/>
      </div>
    )
  }
}
