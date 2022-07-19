import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'  
function CardComponents({item}) {
  return (
    <div>
       <Link to={`/details/${item.id}`}> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.photograph} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
         <p>place:{item.neighborhood}</p>
        </Card.Text>
        <p>cuisine:{item.cuisine_type}</p>
      </Card.Body>
    </Card></Link>
    </div>
  )
}

export default CardComponents