import React, { useEffect, useState } from "react";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LogoutIcon from "@mui/icons-material/Logout";
import { useMoralis } from "react-moralis";
import Image from "next/image";
import Link from "next/link";

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
    <div id="home" className="header">
      <div className="logoContainer">
        <Image
          src={punkLogo}
          alt="punkLogo"
          className="punkLogo"
          objectFit="cover"
          width={150}
          height={50}
        />
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
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          <li>
            <Link href="/">Drops</Link>
          </li>
          <li>
            <Link href="/">Marketplace</Link>
          </li>
          <li>
            <Link href="https://dapp-chat.vercel.app">Dapp Chat</Link>
          </li>
          <li className="headerActions">
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
          </li>
          <li className="userContainer">
            {user && <Link href="/">{shortAddress}</Link>}
          </li>
          <li id="loginButton">
            {!isAuthenticated ? (
              <p onClick={authenticate}>GET IN</p>
            ) : (
              <LogoutIcon onClick={logout} />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
