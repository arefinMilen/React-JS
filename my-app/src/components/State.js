import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';


export default class State extends Component {


    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }
      handleIncrement =() => {
        this.setState( {
            count: this.state.count + 1
        })
      } 
      handleDecrement = () => {
        this.setState({
            count: this.state.count -1
        })
      }
  render() {
    const {count} = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        <Button onClick={this.handleIncrement} className='m-1'disabled={count===5 ? true : false}>+</Button>
        <Button onClick={this.handleDecrement} className='m-1' disabled={count===0 ?true : false}>-</Button>
      </div>
    )
  }
}
