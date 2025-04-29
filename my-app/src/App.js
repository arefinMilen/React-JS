import React from 'react';
import Card from './components/Card';
import Card2 from './components/Card2';
import data from './mydata.json';
import List from './components/unique_list/list';
import ReactBootstrap from './components/React-Bootstrap/ReactBootstrap';
import State  from './components/State';
import {FaFacebook,FaInstagram } from "react-icons/fa";
import CONDITIONAL_RENDARING from './components/Conditional_Rendaring';
import Even_handler from './components/EVENT_HANDLER/index';
import Event_Binding from './components/Event_Binding/index';
import Hook_State1 from './components/Hooks_UseState/index1';
import Hook_State2 from './components/Hooks_UseState/index2';
import Forms from './components/Forms/Forms';

import Child from './components/State_lifting/Child';
// {/* nested   data */}
const users = [
    {
    name:"arefin",
    age:25,
    phones: [
        {Home:'017002456734'},
        {Office: '443561235666'},
    ]
    },
    {
    name: "Samsul",
    age: 23,
    phones: [
        {Home: '01333000444'},
        {Office: '557777888666'},
    ]
    },
  ]

export default function App() {
    
  // event handler for stop propagation
  const handleParentClick = (event) => {
    console.log('parent clicked',event);
  };
  const handleChildClick = (event) => {
    event.stopPropagation();
    console.log('child clicked',event);
  };
   const message = "i am from parent(app)";

   const handleChildMess = (childData)=> {
    console.log("App: " + childData);
   }
  return (
 <>
 {/* making card  */}
       <div>
           <h1 className='headerStyle'>My first todo list</h1>
           {data.map((item,index) => <Card key={index} todoTitle={ item.name} todoDesc={item.age} todoInfo={item.city}/>)}
          </div>
{/* listing from list component */}
          <List />

          <h2> Nested mapping data</h2>
          {/* nested mapping  */}
          <div>
          {users.map((user,index) => (
            <article key={index}>
                <h1>Name: {user.name}</h1>
                <p>Age: {user.age}</p>  
                {
                    user.phones.map((phone,index) => <div>
                        <p>{phone.Home}</p>
                        <p>{phone.Office}</p>
                        
                    </div>)
                }
            </article>
          )
            )}
          </div>      
          < Card2 name="this is card 2" /> 
          <button>
            < FaFacebook className="icon-dsgn"/>
          </button>
          <button>
            < FaInstagram className="icon-dsgn"/>
          </button>
          <div>
          <ReactBootstrap />
          </div>  
                  {/*  state start */}
                  <div>
           
          <State />

          <CONDITIONAL_RENDARING />

          <Even_handler />
          <Event_Binding />
          <Hook_State1 />
          <Hook_State2 />

           
          {/* using stop propagation */}
          <div className='parent'onClick={handleParentClick}>
            <h2>Stop Propagation</h2>
            <button onClick={handleChildClick}>+</button>
          </div>

          {/* create a user forms */}
          <Forms />

          <Child message={message} onChildMess={handleChildMess}/>
                  </div>
</> 
  );       
}
// export default App;