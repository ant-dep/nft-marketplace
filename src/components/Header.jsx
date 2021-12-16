import React, { useEffect, useState } from "react";
import "./header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LogoutIcon from "@mui/icons-material/Logout";
import { useMoralis } from "react-moralis";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [userLogged, setUserLogged] = useState("");
  const { authenticate, isAuthenticated, logout, user } = useMoralis();

  let walletAddress = userLogged?.attributes?.ethAddress;
  let shortAddress = `${walletAddress?.substring(
    0,
    4
  )}...${walletAddress?.substring(
    walletAddress?.length,
    walletAddress?.length - 3
  )}`;

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated", user);
      setUserLogged(user);
    }
  }, [isAuthenticated, user]);

  return (
    <div className="header">
      <div className="wrap-top">
        <div className="logoContainer">
          <img src={punkLogo} alt="punkLogo" className="punkLogo" />
        </div>
        <div className="searchBar">
          <div className="searchIconContainer">
            <SearchIcon />
          </div>
          <input
            type="text"
            className="searchInput"
            placeholder="Collection, item or user..."
          />
        </div>
      </div>
      <nav className="wrap">
        <ul className="headerItems">
          <li>
            <a href="/">Drops</a>
          </li>
          <li>
            <a href="/">Marketplace</a>
          </li>
          <li>
            <a href="https://web3-chat-chi.vercel.app/">Web 3.0 Chat</a>
          </li>
        </ul>

        <div className="headerActions">
          <div
            onClick={() => {
              if (darkMode) {
                setDarkMode(false);
              } else {
                setDarkMode(true);
              }
            }}
            className="themeSwitchContainer"
          >
            {darkMode ? <LightModeIcon /> : <NightlightIcon />}
          </div>
        </div>
        {user && <div className="userContainer">{<p>{shortAddress}</p>}</div>}
        <div className="loginButton">
          {!isAuthenticated ? (
            <p onClick={authenticate}>GET IN</p>
          ) : (
            <LogoutIcon onClick={logout} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
