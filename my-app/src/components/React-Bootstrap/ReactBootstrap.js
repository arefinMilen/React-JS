import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myImage from '../images/react-card-img.jpg';

const ReactBootstrap = () => {
  return (
    <div>
        <h1 className='text-primary'>React-Bootstrap2</h1>
        <button className='btn btn-success'>Click Me</button>
        <Button>Click Me</Button>
    
    <Card>
      <Card.Img variant='top' src={myImage} />
      <Card.Body>
        <Card.Title>First React-bootstrap Card</Card.Title>
        <Card.Text>
          This is a simple card component from react-bootstrap
          </ Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ReactBootstrap;
