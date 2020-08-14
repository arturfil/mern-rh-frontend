import React from 'react';

import './Card.css';
import ShowImage from './ShowImage';

const Card = ({videogame}) => {
  return (
    <div className="card m-10 card-container">
      <div className="">
        <ShowImage item={videogame} url="videogame"/>
        <p>{videogame.name}</p>
        <p>${videogame.price}</p>
        <p>{videogame.description}</p>
          <button className="btn btn-success">More</button>
      </div>
    </div>
  )
}

export default Card;