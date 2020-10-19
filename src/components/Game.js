import React, {useEffect, useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import Card from './Card.js'
import ApproveButton from './ApproveButton'
import RejectButton from './RejectButton'
import './Game.css';

const Game = ({ yelpResults }) => {  
  // Our state for managing our list of restaurant indexes
  const [restaurantList, setRestaurantList] = useState([]);

  // This is the current restaurant we are displaying
  const [currentRestaurant, setCurrentRestaurant] = useState(yelpResults.length - 1);

  // We are only running this at initial render and anytime
  // yelpResults gets updated (only once per food and location submit)
  useEffect(() => {
    setRestaurantList(Object.keys(yelpResults))
  }, [yelpResults]);

  // Rerenders our component whenever these values change
  useEffect(() => {}, [currentRestaurant, restaurantList])

  // Our function to get a random restaurant
  const randomRestaurant = () => {
    let randomIndex = restaurantList[Math.floor(Math.random() * restaurantList.length)];

    // Prevents us from getting the same restaurant in a row
    while (randomIndex === currentRestaurant) {
      randomIndex = restaurantList[Math.floor(Math.random() * restaurantList.length)];
    }
    return randomIndex;
  }

  // Function pertaining to clicking the reject button
  const handleRejectClick = () => {
    // Removing the current restaurant index from our array
    let updatedRestaurantList = restaurantList;
    updatedRestaurantList.splice(restaurantList.indexOf(currentRestaurant), 1);
    setRestaurantList(updatedRestaurantList);

    // Display a new restaurant
    let newCurrentRestaurant = updatedRestaurantList[Math.floor(Math.random() * updatedRestaurantList.length)];
    setCurrentRestaurant(newCurrentRestaurant);
  }  

  // Function pertaining to clicking the approve button
  const handleApproveClick = () => {
    // Setting a new restaurant to display
    setCurrentRestaurant(randomRestaurant());
  }

  const isMobile = useMediaQuery({ query: '(max-device-width: 767.98px)' });
  let restaurantCard = null;
  // Our JSX that shows our restaurant
  if (isMobile) {
    restaurantCard = (
      <div className="game-mobile">
        <Card yelpResults={yelpResults[currentRestaurant]} />
        <div className="game-buttons-mobile">
          <RejectButton handleRejectClick={handleRejectClick} />
          <ApproveButton handleApproveClick={handleApproveClick} />
        </div>
      </div>      
    )
  } else {
    restaurantCard = (
      <div className="game">
        <RejectButton handleRejectClick={handleRejectClick} />
        <Card yelpResults={yelpResults[currentRestaurant]} />
        <ApproveButton handleApproveClick={handleApproveClick} />
      </div>
    )
  }
  // Error Handling
  if (Object.keys(yelpResults).length === 0) {
    return (
      <div>
        Website was refreshed, you have to click "Home" and restart.
      </div>
    )
    // Victory Page
  } else if (restaurantList.length === 1) {
    return (
      <div>
        <p>You'll be eating here :D!</p>
        <div className={isMobile ? "game-mobile" : "game"}>
          <Card yelpResults={yelpResults[currentRestaurant]} />   
        </div>     
      </div>
    )
    // Initial render
  } else {
      console.log(yelpResults);
      return restaurantCard; 
  }
};

export default Game;