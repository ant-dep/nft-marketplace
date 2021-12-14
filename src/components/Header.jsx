import React from "react";
import "./header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="wrap-top">
        <div className="logoContainer">
          <img src={punkLogo} alt="punkLogo" className="punkLogo" />
        </div>
        <div className="searchBar">
          <div className="searchIconContainer">
            <img src={searchIcon} alt="searchIcon" />
          </div>
          <input
            type="text"
            className="searchInput"
            placeholder="Collection, item or user..."
          />
        </div>
      </div>
      <div className="wrap">
        <div className="headerItems">
          <p>Drops</p>
          <p>Marketplace</p>
          <p>Create</p>
        </div>

        <div className="headerActions">
          <div className="themeSwitchContainer">
            <img src={themeSwitchIcon} alt="themeSwitch" />
          </div>
        </div>
        <div className="loginButton">
          <p>GET IN</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
