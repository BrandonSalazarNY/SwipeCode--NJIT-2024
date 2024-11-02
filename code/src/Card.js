// src/Card.js
import React from 'react';
import './Card.css';

const Card = ({ concept, onSwipe }) => {
  return (
    <div className="card" onClick={onSwipe}>
      <h2>{concept.title}</h2>
      <p>{concept.description}</p>
      <img src={concept.image} alt={concept.title} />
    </div>
  );
};

export default Card;
// doneee