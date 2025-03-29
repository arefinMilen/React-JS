import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
class CONDITIONAL_RENDARING extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : true
    }
  }
  
  render() {
    const {isLoggedIn} = this.state;
     
    // using if-else conditionl rendering
    // let element;
    // if(isLoggedIn){
    //   element = <HomePage />;
    // }
    // else{
    //   element = <LoginPage />;
    // }

    return (
      <div>
         {/* ternary operator conditional rendering */}
        {isLoggedIn ? <HomePage /> : <LoginPage />} 

        {/* short circuting conditional rendering */}
        {isLoggedIn && <HomePage />}
        {!isLoggedIn && <LoginPage />}

        
      </div>
    )
  }
}
export default CONDITIONAL_RENDARING;