// src/App.js
import React, { useState } from 'react';
import CardList from './CardList';
import './App.css';

const App = () => {
  const [concepts] = useState([
    {
      title: 'Variables',
      description: 'Variables are containers for storing data values.',
      image: 'https://via.placeholder.com/300?text=Variables'
    },
    {
      title: 'Functions',
      description: 'Functions are blocks of code designed to perform a particular task.',
      image: 'https://via.placeholder.com/300?text=Functions'
    },
    {
      title: 'Loops',
      description: 'Loops allow you to run the same block of code multiple times.',
      image: 'https://via.placeholder.com/300?text=Loops'
    },
    // Add more concepts as needed
  ]);

  const handleSwipe = (concept) => {
    console.log(`${concept.title} was swiped!`);
    // Here you could redirect to a detailed explanation or resource
  };

  return (
    <div className="app">
      <h1>Swipe Code: Learn Coding Concepts</h1>
      <CardList concepts={concepts} onSwipe={handleSwipe} />
    </div>
  );
};

export default App;
