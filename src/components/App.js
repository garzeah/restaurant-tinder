import React, {useState} from 'react';
import Header from './Header';
import Home from './Home';
import Game from './Game';
import Route from './Route';
import Loading from './Loading';
import './App.css';

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
          yelpResults={yelpResults}
          setYelpResults={setYelpResults}
        />
      </Route>
      <Route path="/game">
        <Game yelpResults={yelpResults} />
      </Route>
    </div>
  )
}

export default App;