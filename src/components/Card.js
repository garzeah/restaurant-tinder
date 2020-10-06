import React from 'react';
import './Card.css';

const Card = ({ yelpResults }) => {
  console.log(yelpResults);

  return (
    <div className="card-container">
      <h1 className="header">{yelpResults.name}</h1>
      <div className="card-container-no-header">
        <div className="card-img">
          <img src={yelpResults.image_url} alt="A restaurant" />
        </div>
        <div className="card-content">
          <div className="ratings-and-reviews">
            <p>{yelpResults.rating}</p>
            <p>{yelpResults.review_count} reviews</p>
          </div>
          <div className="price-and-category">
            <p>{yelpResults.price}</p>
            <p>Category will be stored here soon</p>
          </div>
          <div className="address-and-number">
            <p>Location will be stored here soon</p>
            <p>{yelpResults.display_phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;