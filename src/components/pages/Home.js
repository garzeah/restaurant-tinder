import React from "react";
import { useMediaQuery } from "react-responsive";

import SearchBar from "../SearchBar";
import Link from "../router/Link";
import mobileLogo from "../../assets/images/mobileLogo.png";
import desktopLogo from "../../assets/images/desktopLogo.png";
import "./Home.css";

const Home = ({ handleFoodSearch, handleLocationSearch }) => {
  const isMobile = useMediaQuery({ query: "(max-device-width: 767.98px)" });
  let logo = null;

  if (isMobile) {
    logo = (
      <div className="ui image">
        <img
          style={{ margin: "20px auto" }}
          src={mobileLogo}
          alt="Restaurant Tinder Icon"
        />
      </div>
    );
  } else {
    logo = (
      <div className="ui image">
        <img src={desktopLogo} alt="Restaurant Tinder Icon" />
      </div>
    );
  }

  return (
    <div className="home-container">
      {logo}
      <SearchBar
        text={"What are you craving?"}
        onSelectTerm={handleFoodSearch}
      />
      <SearchBar
        text={"Enter City and State"}
        onSelectTerm={handleLocationSearch}
      />
      <Link href="/loading" className="fluid ui button submit-button">
        Submit
      </Link>
    </div>
  );
};

export default Home;
