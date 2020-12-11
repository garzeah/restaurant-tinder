<<<<<<< HEAD
import React from "react";
import { useMediaQuery } from "react-responsive";

import SearchBar from "./SearchBar";
import Link from "./router/Link";
import mobileLogo from "../assets/images/mobileLogo.png";
import desktopLogo from "../assets/images/desktopLogo.png";
import "./Home.css";
=======
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Search from './Search';
import Link from './Link';
import './Home.css'
import mobileLogo from '../assets/images/mobileLogo.png';
import desktopLogo from '../assets/images/desktopLogo.png';
>>>>>>> parent of e2fd339... Revert "Revert "changed file structure""

const Home = ({ handleFoodSearch, handleLocationSearch }) => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 767.98px)' });
  let logo = null;

  if (isMobile) {
    logo = 
      <div className="logo-container">
        <img
          style={{maxWidth: "90%"}}
          src={mobileLogo}
          alt="Restaurant Tinder Icon"
        />
      </div>     
  } else {
    logo = 
      <div className="logo-container">
        <img
          src={desktopLogo}
          alt="Restaurant Tinder Icon"
        />
      </div>       
  }

  return (
    <div className="home-container">
      {logo}
<<<<<<< HEAD
      <SearchBar
        text={"What are you craving?"}
        onSelectTerm={handleFoodSearch}
      />
      <SearchBar
=======
      <Search 
          text={"What are you craving?"}
          onSelectTerm={handleFoodSearch}
        />
      <Search 
>>>>>>> parent of e2fd339... Revert "Revert "changed file structure""
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