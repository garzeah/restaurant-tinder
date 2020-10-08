import React from 'react';
import './Card.css';

const Card = ({ yelpResults }) => {
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
            <p>{`Price: ${yelpResults.price}`}</p>
            <p>{`${yelpResults.categories[0].title}`}</p>
          </div>
          <div className="address">
            <p>
              {yelpResults.location.display_address[0]}<br />
              {yelpResults.location.display_address[1]}
            </p>
          </div>
          <div className="number">
            <p>Restaurant Number: {yelpResults.display_phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;