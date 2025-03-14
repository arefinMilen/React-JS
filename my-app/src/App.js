import React from 'react';
import Card from './components/Card';

function App() {
  return  <div>
    <h1 className='headerStyle'>My first todo list</h1>
    <Card todoTitle="My 1st card" todoDesc="talk about React.js"/>
    <Card todoTitle="My 2nd card" todoDesc="talk about Next.js"/>
    <Card todoTitle="My 3rd card" todoDesc="talk about Nest.js"/>
  </div>
}
export default App;