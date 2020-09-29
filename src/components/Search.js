import React from 'react';
import './Search.css';

// Our component that displays our search bar
// onSelectTerm passes data from child to parent
const Search = ({ text, onSelectTerm }) => {
  return (
    <div className="ui form" style={{margin: "15px"}}>
      <div className="field">
        <div className="search-container">
          <label style={{fontWeight: "bold"}}>{text}</label>
          <input 
            style={{background: "#F65275", width: "350px"}}
            type="text"
            onChange={(event) => {onSelectTerm(event.target.value)}}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;