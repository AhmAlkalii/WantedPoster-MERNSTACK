import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const CharacterInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { character } = location.state;

  const handleClick = async () => {
    const response = await fetch(`http://localhost:4000/api/onepiece/${character._id}`, {
      method: 'DELETE'
    });
    const json = await response.json();

    if (response.ok) {
      console.log("Deleted");
    }

    navigate('/');
  };

  return (
    <div>
      <h1 class="display-1">Hello, {character.name}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '160vh' }}>
        <div className="character-item" key={character._id}>
          <div className="wanted-poster-second">
            <div className="poster-header">
              <h1>Wanted</h1>
            </div>
            <div className="poster-image-second">
              <img src={character.image} alt="Wanted" />
            </div>
            <div className="poster-details">
              <h1 class="display-6">Devil Fruit: {character.devilfruit}</h1>
              <h1 class="display-6">Rating: {character.rating}</h1>
              <h2>Bounty: <strong>{character.bounty}</strong></h2>
            </div>
            <Button variant="secondary" onClick={handleClick}>
              Delete <DeleteIcon /> 
            </Button>
          </div>
        </div>
      </div>
    </div>
    
  );
};
