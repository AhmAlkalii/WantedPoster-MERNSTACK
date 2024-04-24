import React from 'react';
import { Link } from 'react-router-dom';


export const Characterlist = ({ characters }) => {
  return (
    <div className="character-grid">
      {characters.map((character) => (
        <div className="character-item" key={character._id}>
          <Link
            to={`/character/${character._id}`}
            state={{ character: character }}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div className="wanted-poster">
              <div className="poster-header">
                <h1>Wanted</h1>
              </div>
              <div className="poster-image">
                <img src={character.image} alt="Wanted" />
              </div>
              <div className="poster-details">
                <h2>{character.name}</h2>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
