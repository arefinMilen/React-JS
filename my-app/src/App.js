import React from 'react';
import Card from './components/Card';
import data from './mydata.json';

function App() {
    // console.log(data);
  return  <div>
            <h1 className='headerStyle'>My first todo list</h1>
            {data.map((item,index) => <Card key={index} todoTitle={ item.name} todoDesc={item.age} todoInfo={item.city}/>)}
          </div>
}
export default App;