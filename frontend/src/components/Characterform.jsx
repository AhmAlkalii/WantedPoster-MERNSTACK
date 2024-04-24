import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

export const Characterform = () => {
  const [name, setName] = useState('')
  const [devilfruit, setDevilfruit] = useState('')
  const [image, setImage] = useState('')
  const [bounty, setBounty] = useState('')
  const [rating, setRating] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handlesubmit = async (e) => {
    e.preventDefault()

    const merry = { name, devilfruit, image, bounty, rating }

    const response = await fetch('http://localhost:4000/api/onepiece', {
        method: 'POST',
        body: JSON.stringify(merry),
        headers: { "Content-Type": "application/json" }
    })

    const data = response.json()
    if(!response.ok){
        setError(data.error)
    }

    if(response.ok){
        setError(null)
        setName('')
        setDevilfruit('')
        setImage('')
        setBounty('')
        setRating('')
    }
    navigate('/')
  }


  return (
    <div className='cardcontainer'>
        <Card style={{ width: '40rem', backgroundColor: '#FFC8C8', borderWidth: 3 }}>
            <Card.Body>
                <Card.Title>Add A New Character</Card.Title>
                <Form onSubmit={handlesubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Character Name</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder="Enter Character Name" 
                            required 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Devil Fruit</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Devil Fruit" 
                            required 
                            value={devilfruit}
                            onChange={(e) => setDevilfruit(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter A URL Please"
                            required 
                            value={image}
                            onChange={(e) => setImage(e.target.value)} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Bounty</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Bounty"
                            required 
                            value={bounty}
                            onChange={(e) => setBounty(e.target.value)} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="Rating"
                            required 
                            value={rating}
                            onChange={(e) => setRating(e.target.value)} 
                        />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Submit <CheckCircleIcon/>
                    </Button>

                </Form>
            </Card.Body>
        </Card>
    </div>
  )
}
