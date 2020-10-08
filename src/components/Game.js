import React from 'react';
import Card from './Card.js'
import ApproveButton from './ApproveButton'
import RejectButton from './RejectButton'
import './Game.css';

const Game = ({ yelpResults, setYelpResults }) => {
  // Figure out why it does this 3 times later
  console.log(yelpResults);

  // Length of businesses
  // console.log(Object.keys(yelpResults.businesses).length);

  // Removing an entry from our yelp results
  // delete yelpResults.businesses[0];
  // delete yelpResults.businesses[1];
  // console.log(yelpResults);
  // console.log(typeof(yelpResults.businesses[0]));

  // Our game logic
  // useEffect(() => {
  // if length of remaining restaurants is equal to one, this is where you'll eat
  
  // else if user clicks plus, we keep the restaurant
  //    - pass an onClick handler

  // else if user clicks minus, we remove the restaurant from the list
  //    - pass an onClick handler

  // else if user clicks choose for me, we randomly choose from the list of
  // remaining restaurants

  // else
  // you shouldn't get this output at all, if you do, debug
  // });

  return (
    <div className="game">
      <RejectButton />
      <Card 
        yelpResults={yelpResults.businesses[0]}
      />
      <ApproveButton />
    </div>
  );
};

export default Game;