import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
class CONDITIONAL_RENDARING extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : false
    }
  }
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let element;
    if(isLoggedIn){
      element = <HomePage />;
    }
    else{
      element = <LoginPage />;
    }

    return (
      <div>
         {element}
      </div>
    )
  }
}
export default CONDITIONAL_RENDARING;