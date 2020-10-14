import React, {useEffect, useState} from 'react';
import Card from './Card.js'
import ApproveButton from './ApproveButton'
import RejectButton from './RejectButton'
import './Game.css';

const Game = ({ yelpResults }) => {  
  // Our state for managing our list of restaurant indexes
  const [restaurantIndexes, setRestaurantIndexes] = useState([]);

  // This is the restaurant we want to show
  const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);

  // We are only running this at initial render and anytime
  // yelpResults gets updated (only once per food and location submit)
  useEffect(() => {
    setRestaurantIndexes(Object.keys(yelpResults))
  }, [yelpResults]);

  // Rerenders our component whenever these values change
  useEffect(() => {}, [currentRestaurantIndex, restaurantIndexes])

  // Our function to get a random restaurant
  const randomRestaurant = () => {
    let randomIndex = restaurantIndexes[Math.floor(Math.random() * restaurantIndexes.length)];

    // Prevents us from getting the same restaurant in a row
    while (randomIndex === currentRestaurantIndex) {
      randomIndex = restaurantIndexes[Math.floor(Math.random() * restaurantIndexes.length)];
    }

    return randomIndex;
  }

  // Function pertaining to clicking the reject button
  const handleRejectClick = () => {
    console.log('Reject');
    
    // Turning Approve Route on and Reject route off 
    // return restaurantCard;
  }  

  // Function pertaining to clicking the approve button
  const handleApproveClick = () => {
    // Setting a new restaurant to display
    setCurrentRestaurantIndex(randomRestaurant());
    console.log(currentRestaurantIndex);
  }  

  // Our JSX that shows our restaurant
  let restaurantCard = (
    <div className="game">
      <RejectButton handleRejectClick={handleRejectClick} />
      {/* Chooses a random restaurant to view in our remaining restaurants */}
      <Card 
        yelpResults={yelpResults[currentRestaurantIndex]}
        // yelpResults={yelpResults[restaurantIndexes[Math.floor(Math.random() * restaurantIndexes.length)]]}
      />
      <ApproveButton handleApproveClick={handleApproveClick} />
    </div>
  )

  // Show Approve Route
  if (Object.keys(yelpResults).length === 0) {
    // console.log('Error Handling')
    // console.log(`Restaurant Indexes: ${restaurantIndexes}`);
    return (
      <div>
        Website was refreshed, you have to click "Home" and restart.
      </div>
    )
    // Our initial render, meaning no buttons were clicked and no error
  } else {
      // console.log('Initial Render')
      // console.log(`Restaurant Indexes: ${restaurantIndexes}`);
      return restaurantCard; 
  }
};

export default Game;