import React from "react";

import "./Card.css";

const Card = ({ yelpResults }) => {
  const processBadData = (data, type) => {
    const emptyData = typeof data === "undefined" || data.length === 0;

    if (type === "rating") {
      if (emptyData) return "No Ratings";
    } else if (emptyData) {
      return "N/A";
    }

    return data;
  };

  return (
    <div className="card-container">
      <h1 className="header">{yelpResults.name}</h1>
      <div className="card-container-no-header">
        <div className="card-img">
          <img src={yelpResults.image_url} alt="A restaurant" />
        </div>
        <div className="card-content">
          <div className="ratings-and-reviews">
            <p>{`${processBadData(
              yelpResults.rating,
              "rating"
            )} Star Rating`}</p>
            <a href={yelpResults.url} target="_blank" rel="noopener noreferrer">
              {`${yelpResults.review_count} reviews`}
            </a>
          </div>
          <div className="price-and-category">
            <p>{`Price: ${processBadData(yelpResults.price)}`}</p>
            <p>{`${processBadData(yelpResults.categories[0].title)}`}</p>
          </div>
          <div className="address">
            <p>
              {processBadData(yelpResults.location.display_address[0])}
              {/* <br />
              {`${yelpResults.location.city}, ${yelpResults.location.state} ${yelpResults.location.zip_code}`} */}
            </p>
          </div>
          <div className="number">
            <p>Phone Number: {processBadData(yelpResults.display_phone)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
