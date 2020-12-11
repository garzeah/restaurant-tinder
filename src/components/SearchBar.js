import React from "react";

import "./SearchBar.css";

// Our component that displays our search bar
// onSelectTerm passes data from child to parent
const SearchBar = ({ text, onSelectTerm }) => {
  return (
    <div className="ui form">
      <div className="field">
        <div className="search-container">
          <input
            type="text"
            placeholder={text}
            onChange={(event) => {
              onSelectTerm(event.target.value);
            }}
            onFocus={(event) => (event.target.placeholder = "")}
            onBlur={(event) => (event.target.placeholder = text)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
