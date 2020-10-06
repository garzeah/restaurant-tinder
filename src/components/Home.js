import React from 'react';
import Search from './Search';
import Link from './Link';
import mobileLogo from '../assets/mobileLogo.png';
import desktopLogo from '../assets/desktopLogo.png';

const Home = ({ handleFoodSearch, handleLocationSearch, onSearchSubmit }) => {
  return (
    <div>
      <div className="logo-container">
          <img
            src={window.screen.width < 768 ? mobileLogo : desktopLogo}
            alt="Restaurant Tinder Icon"
          />
      </div>
      <Search 
          text={"What are you craving?"}
          onSelectTerm={handleFoodSearch}
        />
      <Search 
        text={"What's your ideal location?"}
        onSelectTerm={handleLocationSearch}
      />
      <Link
        href="/loading"
        className="fluid ui button"
        style={{width: "300px", margin: "30px auto"}}>
        Submit
      </Link>
    </div>
  )
};

export default Home;