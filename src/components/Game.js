import React from 'react';
import './Game.css';
import Card from './Card.js'

const Game = ({ yelpResults }) => {
  // Figure out why it does this 3 times later
  // console.log(yelpResults);
  return (
    <div className="game">
      <Card 
        yelpResults={yelpResults}
      />
    </div>
  );
};

export default Game;