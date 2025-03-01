import React from 'react';
import ReactDOM from 'react-dom/client';
 
 const todoTitle = 'My first todo list';
 const date = new Date();
 const currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
 const currentDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1> Hello, world! </h1>
    <h2>{todoTitle}</h2>
    <p>Current time: {currentTime}</p>
    <p>Current date: {currentDate}</p>
    <p>lorem ipsum dolor sit amet...
    </p>
  </div>
);

 