<<<<<<< HEAD
import React, { useState } from "react";

import Header from "./Header";
import Home from "./Home";
import Game from "./games/Game";
import Route from "./router/Route";
import Loading from "./games/Loading";
import "./App.css";
=======
import React, {useState} from 'react';
import Header from './Header';
import Home from './Home';
import Game from './Game';
import Route from './Route';
import Loading from './Loading';
import './App.css';
>>>>>>> parent of e2fd339... Revert "Revert "changed file structure""

const App = () => {
  // Our data used to send to Yelp Fusion when our Search child
  // component sends it back to its parent
  const [food, setFood] = useState();
  const [location, setLocation] = useState();

  // Data pertaining to response from Yelp Fusion
  const [yelpResults, setYelpResults] = useState({ businesses: {} });

  return (
    <div>
      <Header />
      <Route path="/">
        <Home 
          handleFoodSearch={(term) => {setFood(term)}}
          handleLocationSearch={(term) => {setLocation(term)}}
        />
      </Route>
      <Route path="/loading">
        <Loading 
          food={food} 
          location={location}
          setYelpResults={setYelpResults}
        />
      </Route>
      <Route path="/game">
        <Game 
          yelpResults={yelpResults.businesses}
        />
      </Route>
    </div>
  )
}

export default App;