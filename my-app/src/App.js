import React from 'react';
import Card from './components/Card';
import data from './mydata.json';
import List from './components/unique_list/list';

{/* nested   data */}
const users = [
    {
    name:"arefin",
    age:25,
    phones: [
        {Home: '017002456734'},
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
    // console.log(data);
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
</> 
  );       
}
// export default App;