import React, {useState} from 'react';
import yelp from '../apis/yelp-fusion';
import Header from './Header';
import Home from './Home';
import Game from './Game';
import Route from './Route';
import './App.css';

const App = () => {
  // Our data used to send to Yelp Fusion when our Search child
  // component sends it back to its parent
  const [food, setFood] = useState();
  const [location, setLocation] = useState();

  // Data pertaining to response from Yelp Fusion
  const [yelpResults, setYelpResults] = useState();

  // We will be using these functions to send food and location data
  // from child to parent
  const handleFoodSearch = (term) => {setFood(term);};
  const handleLocationSearch = (term) => {setLocation(term);};

  // Function for accessing Yelp Fusion API
  const onSearchSubmit = async () => {
    const response = await yelp.get('/businesses/search', {
      params: {
        term: food,
        location: location
      }
    });
    // Saving our results
    setYelpResults(response.data.businesses);
  }

//   <Home 
//   handleFoodSearch={handleFoodSearch}
//   handleLocationSearch={handleLocationSearch}
//   onSearchSubmit={onSearchSubmit}
// />

  return (
    <div>
      <Header />
      <Route path="/">
        <Home 
          handleFoodSearch={handleFoodSearch}
          handleLocationSearch={handleLocationSearch}
          onSearchSubmit={onSearchSubmit}
        />
      </Route>
      <Route path="/game">
        <Game yelpResults={yelpResults}/>
      </Route>      
    </div>
  )
}

export default App;