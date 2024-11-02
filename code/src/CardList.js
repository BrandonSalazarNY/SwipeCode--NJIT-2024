// src/CardList.js
import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ concepts, onSwipe }) => {
  return (
    <div className="card-list">
      {concepts.map((concept, index) => (
        <Card key={index} concept={concept} onSwipe={() => onSwipe(concept)} />
      ))}
    </div>
  );
};

export default CardList;
// done 