import React, {useState} from 'react';
import Search from './Search';
import Header from './Header';
import yelp from '../apis/yelp-fusion';
import logo from '../assets/logo.png';
import './App.css';

const App = () => {
  // Our data used to send to Yelp Fusion when our Search child
  // component sends it back to its parent
  const [food, setFood] = useState();
  const [location, setLocation] = useState();

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
    console.log(response.data.businesses);
  }

  return (
    <div>
      <Header />
      <div className="logo-container">
        <img
          src={logo}
          alt="Restaurant Tinder Icon"
        />
      </div>
      <Search 
        text={"What are you craving?"}
        onSelectTerm={handleFoodSearch}
      />
      <Search 
        text={"What's your ideal location?"}
        onSelectTerm={handleLocationSearch}
      />
      <button 
        className="fluid ui button" 
        onClick={onSearchSubmit}
        style={{width: "300px", margin: "30px auto"}}>
        Submit
      </button>
      <p>{food}</p>
      <p>{location}</p>
    </div>
  )
}

export default App;