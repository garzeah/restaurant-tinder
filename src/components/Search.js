import React from 'react';

// Our component that displays our search bar
// onSelectTerm passes data from child to parent
const Search = ({ text, onSelectTerm }) => {
  return (
    <div className="ui form">
      <div className="field">
        <div>
          <label>{text}</label>
          <br/>
          <input 
            type="text"
            onChange={(event) => {onSelectTerm(event.target.value)}}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;