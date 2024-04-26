import React from 'react';
import { Link } from 'react-router-dom';
import hat from "../asset/hat.png"



export const Nav = () => {
  return (

    <nav className="navbar navbar-expand-lg navs">
      
      <img src={hat} alt="" width="84" height="63" className="me-2"/>
      <h1 className="navbar-brand" style={{fontSize:30}}>Posters</h1>

      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/"  className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="New-Character"  className="nav-link">
              Form
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
