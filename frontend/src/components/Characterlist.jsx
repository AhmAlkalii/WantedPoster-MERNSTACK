import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';


export const Characterlist = ({ character }) => {
  return (
    <div className='secondcard' key={character._id}>
        <Link to={`/character/${character._id}`} state={{character: character}} style={{textDecoration: 'none'}}>
            <Card style={{ width: '20rem', backgroundColor: '#FFC8C8', borderWidth: 3, marginBottom: 10 }}>
                <Card.Body>            
                        <Card.Title>{character.name}</Card.Title>
                    <Card.Text>Rating: {character.rating}</Card.Text>
                </Card.Body>
            </Card>     
        </Link>
                       
    </div>
  )
}
