import React, {useState} from 'react';
import yelp from '../apis/yelp-fusion';
import Link from './Link';
import './Loading.css';

const Loading = ({ food, location, setYelpResults }) => {
  const [enableLoading, setEnableLoading] = useState(0);

  // Function for accessing Yelp Fusion API
  const yelpFusionSearch = async () => {
    try {
      const response = await yelp.get('/businesses/search', {
        params: {
          term: food,
          location: location
        }
      })
      // Saving our results
      setYelpResults({businesses: response.data.businesses});

      // Turns off our loading screen
      setEnableLoading(1);
    }
    catch (error) {
      setEnableLoading(2);
    }
  };

  // Our Yelp Fusion Search function
  yelpFusionSearch();

  // Our conditional for when to enable or disable loading screen
  if (enableLoading === 0) {
    return (
      <div className="loadingIncomplete">
        <p>Waiting for Yelp to send us restaurants...</p>
      <div className="loader"></div>
    </div>
    )
  } else if (enableLoading === 1) {
      return (
        <div className="loadingComplete">
          <p>Search complete!</p>
          <Link
            href="/game"
            className="fluid ui button"
            style={{width: "300px", margin: "30px auto"}}>
            Click to play!
          </Link>
        </div>
      )
    } else {
      return (
        <div>
          <p>Loading failed. It seems the Yelp Fusion API isn't working right now. Try again later.</p>
        </div>
      )
    }
};

export default Loading;