import React, {useEffect, useState} from 'react';
import Card from './Card.js'
import ApproveButton from './ApproveButton'
import RejectButton from './RejectButton'
import './Game.css';

const Game = ({ yelpResults }) => {  
  // Our state for managing the indexes of restaurants
  const [restaurantIndexes, setRestaurantIndexes] = useState([]);

  // We are only running this at initial render and anytime
  // yelpResults gets updated (only once per food and location submit)
  useEffect(() => {
    // Concatenating the value of each index into our state
      Object.keys(yelpResults).map((key) => {
        return setRestaurantIndexes(restaurantIndexes => [...restaurantIndexes, key]);
      });
  }, [yelpResults]);

  const handleRejectClick = () => {
    console.log('Reject');
  }

  const handleApproveClick = () => {
    console.log('Approve');
  }

  console.log(yelpResults);

  // Component rerenders everytime someone clicks approve or reject
  useEffect(() => {
    // if length of restaurantIndexes === 1 then this is where you'll dine at

  }, [restaurantIndexes])

  return (
    <div className="game">
      <RejectButton handleRejectClick={handleRejectClick} />
      <Card 
        yelpResults={yelpResults[0]}
      />
      <ApproveButton handleApproveClick={handleApproveClick} />
    </div>
  );
};

export default Game;