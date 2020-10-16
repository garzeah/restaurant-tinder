import React, {useEffect, useState} from 'react';
import Card from './Card.js'
import ApproveButton from './ApproveButton'
import RejectButton from './RejectButton'
import './Game.css';

const Game = ({ yelpResults }) => {  
  // Our state for managing our list of restaurant indexes
  const [restaurantList, setRestaurantList] = useState([]);

  // This is the current restaurant we are displaying
  const [currentRestaurant, setCurrentRestaurant] = useState(4);

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
    console.log(`randomRest Index: ${randomIndex}`)
    return randomIndex;
  }

  // Function pertaining to clicking the reject button
  const handleRejectClick = () => {
    // Removing the current restaurant index from our array
    let updatedRestaurantList = restaurantList;
    console.log(`Before Splice Updated Restaurant List: ${updatedRestaurantList}`)
    updatedRestaurantList.splice(restaurantList.indexOf(currentRestaurant), 1);

    // console.log(`Old Current Restaurant: ${currentRestaurant}`)
    console.log(`Updated Restaurant List: ${updatedRestaurantList}`)
    setRestaurantList(updatedRestaurantList);
    // console.log(`Restaurant List: ${restaurantList}`)

    // Display a new restaurant
    // console.log(`current rest before set ${currentRestaurant}`);
    // console.log(`Random Number in updated rest list ${updatedRestaurantList[Math.floor(Math.random() * updatedRestaurantList.length)]}`)
    let newCurrentRestaurant = updatedRestaurantList[Math.floor(Math.random() * updatedRestaurantList.length)];
    console.log(`Current Rest in Reject Fn: ${newCurrentRestaurant}`)
    setCurrentRestaurant(newCurrentRestaurant);
    // console.log(`current rest after set ${currentRestaurant}`);
    // console.log(`New Current Restaurant: ${currentRestaurant}`)
  }  

  // Function pertaining to clicking the approve button
  const handleApproveClick = () => {
    // Setting a new restaurant to display
    setCurrentRestaurant(randomRestaurant());
  }

  // Our JSX that shows our restaurant
  let restaurantCard = (
    <div className="game">
      <RejectButton handleRejectClick={handleRejectClick} />
      {/* Chooses a random restaurant to view in our remaining restaurants */}
      <Card 
        yelpResults={yelpResults[currentRestaurant]}
        // yelpResults={yelpResults[restaurantList[Math.floor(Math.random() * restaurantList.length)]]}
      />
      <ApproveButton handleApproveClick={handleApproveClick} />
    </div>
  )

  // Show Approve Route
  if (Object.keys(yelpResults).length === 0) {
    // console.log('Error Handling')
    // console.log(`Restaurant Indexes: ${restaurantList}`);
    return (
      <div>
        Website was refreshed, you have to click "Home" and restart.
      </div>
    )
    // Our initial render, meaning no buttons were clicked and no error
  } else if (restaurantList.length === 1) {
    return (
      <div>
        <p>You'll be eating here :D!</p>
        <Card 
          yelpResults={yelpResults[currentRestaurant]}
          // yelpResults={yelpResults[restaurantList[Math.floor(Math.random() * restaurantList.length)]]}
        />        
      </div>
    )
  } else {
      // console.log('Initial Render')
      // console.log(`Restaurant Indexes: ${restaurantList}`);
      // console.log(`Restaurant Indexes Length: ${restaurantList.length}`);
      // console.log(yelpResults);
      console.log(`Current Restaurant Index: ${currentRestaurant}`)
      return restaurantCard; 
  }
};

export default Game;