import React, {useEffect, useState} from 'react';
import Card from './Card.js'
import ApproveButton from './ApproveButton'
import RejectButton from './RejectButton'
import './Game.css';

const Game = ({ yelpResults }) => {  
  // Our array for managing our list of restaurant indexes
  const [restaurantIndexes, setRestaurantIndexes] = useState([]);

  // Our states for showing our Approve or Reject conditions
  const [showApprove, setShowApprove] = useState(false);
  const [showReject, setShowReject] = useState(false);

  // We are only running this at initial render and anytime
  // yelpResults gets updated (only once per food and location submit)
  useEffect(() => {
    setRestaurantIndexes(Object.keys(yelpResults))
  }, [yelpResults, showApprove, showReject]);

  // Function pertaining to clicking reject button
  const handleRejectClick = () => {
    console.log('Reject');
    
    // Turning Reject Route on and Approve route off
    setShowReject(true);
    setShowApprove(false);
  }

  // Function pertaining to clicking approve button
  const handleApproveClick = () => {
    console.log('Approve');
    
    // Turning Approve Route on and Reject route off 
    setShowApprove(true);
    setShowReject(false);
  }

  // Show Approve Route
  if (showApprove === true) {
    console.log('Approve Render')
    console.log(`Restaurant Indexes: ${restaurantIndexes}`);
    console.log(`Random Restaurant Index: ${restaurantIndexes[Math.floor(Math.random() * restaurantIndexes.length)]}`);
    return (
      <div className="game">
        <RejectButton handleRejectClick={handleRejectClick} />
        {/* Chooses a random restaurant to view in our remaining restaurants */}
        <Card 
          yelpResults={yelpResults[restaurantIndexes[Math.floor(Math.random() * restaurantIndexes.length)]]}
        />
        <ApproveButton handleApproveClick={handleApproveClick} />
      </div>      
    )
    // Show Reject Route
  } else if (showReject === true) {
      console.log('Reject Render')
      console.log(`Restaurant Indexes: ${restaurantIndexes}`);
      return (
        <div className="game">
          <RejectButton handleRejectClick={handleRejectClick} />
          {/* Chooses a random restaurant to view in our remaining restaurants */}
          <Card 
            yelpResults={yelpResults[restaurantIndexes[Math.floor(Math.random() * restaurantIndexes.length)]]}
          />
          <ApproveButton handleApproveClick={handleApproveClick} />
        </div>      
      )
  // If yelpResults does not have data for some reason this is our error handling content
  } else if (Object.keys(yelpResults).length === 0) {
    console.log('Error Handling')
    console.log(`Restaurant Indexes: ${restaurantIndexes}`);
    return (
      <div>
        Website was refreshed, you have to click "Home" and restart.
      </div>
    )
    // Our initial render, meaning no buttons were clicked and no error
  } else {
      console.log('Initial Render')
      console.log(`Restaurant Indexes: ${restaurantIndexes}`);
      return (
        <div className="game">
          <RejectButton handleRejectClick={handleRejectClick} />
          {/* Chooses a random restaurant to view in our remaining restaurants */}
          <Card 
            yelpResults={yelpResults[1]}
            // yelpResults={yelpResults[restaurantIndexes[Math.floor(Math.random() * restaurantIndexes.length)]]}
          />
          <ApproveButton handleApproveClick={handleApproveClick} />
        </div>
      )
  }
};

export default Game;