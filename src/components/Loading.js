import React from 'react';
import yelp from '../apis/yelp-fusion';
import Link from './Link';
import './Loading.css';

const Loading = ({ food, location, yelpResults, setYelpResults }) => {
  // Function for accessing Yelp Fusion API
  const yelpFusionSearch = async () => {
    const response = await yelp.get('/businesses/search', {
      params: {
        term: food,
        location: location
      }
    });
    // Saving our results
    setYelpResults({businesses: response.data.businesses});
  };

  // If we have an empty object, then make a request to Yelp and show loading screen
  if (Object.keys(yelpResults.businesses).length === 0 && yelpResults.constructor === Object) {
    yelpFusionSearch();
    return (
      <div className="loadingIncomplete">
        <p>Waiting for Yelp to send us restaurants...</p>
      <div className="loader"></div>
    </div>
    )
  } else {
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
    }
};

export default Loading;