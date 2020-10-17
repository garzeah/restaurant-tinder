import React from 'react';
import Search from './Search';
import Link from './Link';
import './Home.css'
import mobileLogo from '../assets/images/mobileLogo.png';
import desktopLogo from '../assets/images/desktopLogo.png';

const Home = ({ handleFoodSearch, handleLocationSearch }) => {
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
        text={"Enter City and State"}
        onSelectTerm={handleLocationSearch}
      />
      <Link
        href="/loading"
        className="fluid ui button submit-button"
        >
        Submit
      </Link>
    </div>
  )
};

export default Home;