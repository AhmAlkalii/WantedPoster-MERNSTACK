import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';


export const CharacterInfo = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { character } = location.state

  const handleClick = async () => {
    const response = await fetch(`http://localhost:4000/api/onepiece/${character._id}`, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      console.log("Deleted")
    }

    navigate('/')
  }

  return (
    <div>
        <h3>Hello, {character.name}</h3>

        <Card style={{ width: '20rem', backgroundColor: '#FFC8C8', borderWidth: 3, marginBottom: 10 }}>
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>Devil Fruit: {character.devilfruit}</Card.Text>
                <Card.Text>Possess Haki: {character.haki}</Card.Text>
                <Card.Text>Rating: {character.rating}</Card.Text>

                <Button onClick={handleClick}>delete</Button>
            </Card.Body>
        </Card>
    </div>
  )
}
