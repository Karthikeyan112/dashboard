import React from 'react';
import './Card.scss';

const Card = ({ items }) => {
  return (
    <div className='card'>
      {items.map(({ type, count }) => (
        <div className='card__details'>
          <h1>{count}</h1>
          <p>{type}</p>
        </div>
      ))}
    </div>
  )
}

export default Card;
