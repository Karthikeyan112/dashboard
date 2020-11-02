import React from 'react';
import './Card.scss';

const Card = ({ items }) => {
  return (
    <div className='card'>
      {items.map(({ type, count, shouldAddClass }) => (
        <div key={type} className='card__details'>
          <h1 className={shouldAddClass && 'addBlue'}>{count}</h1>
          <p>{type}</p>
        </div>
      ))}
    </div>
  )
}

export default Card;
