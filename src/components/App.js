import React, {useState} from 'react';
import yelp from '../apis/yelp-fusion';
import Search from './Search';

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
      <h1>Restaurant Tinder</h1>
      <Search 
        text={"What are you craving?"}
        onSelectTerm={handleFoodSearch}
      />
      <Search 
        text={"What's your ideal location?"}
        onSelectTerm={handleLocationSearch}
      />
      <button className="fluid ui button" onClick={onSearchSubmit}>Submit</button>
      <p>{food}</p>
      <p>{location}</p>
    </div>
  )
}

export default App;