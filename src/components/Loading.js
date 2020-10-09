import React, { useEffect, useState } from 'react';
import yelp from '../apis/yelp-fusion';
import Link from './Link';
import './Loading.css';

const Loading = ({ food, location, setYelpResults }) => {
  const [enableLoading, setEnableLoading] = useState(0);

  useEffect(() => {
    // Function for accessing Yelp Fusion API
    const yelpFusionSearch = async () => {
      try {
        const response = await yelp.get('/businesses/search', {
          params: {
            term: food,
            location: location
          }
        })
        // Saving our results, getting first 5 restaurants,
        // and turning off our loading screen
        setYelpResults({businesses: response.data.businesses.splice(0, 5)});
        setEnableLoading(1);
      }
      catch (error) {
        setEnableLoading(2);
      }
    }
    yelpFusionSearch();
  }, [food, location, setYelpResults])

  // Our conditionals for when to enable or disable loading screen
  // Loading screen is waiting for Yelp to receive data
  if (enableLoading === 0) {
    return (
      <div className="loadingIncomplete">
        <p>Waiting for Yelp to send us restaurants...</p>
      <div className="loader"></div>
    </div>
    )
  // Loading screen has received data from Yelp
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
    // Loading failed
    } else {
      return (
        <div className="loadingFailed">
          <p>Loading failed. It seems the Yelp Fusion API isn't working right now. Try again later.</p>
        </div>
      )
    }
};

export default Loading;