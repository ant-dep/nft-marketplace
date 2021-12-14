import React, { useEffect, useState } from "react";
import "./main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import weth from "../assets/weth.png";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              src={activePunk.image_original_url}
              alt={activePunk.name}
              className="selectedPunk"
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activePunk.name}
            <span className="itemNumber">#{activePunk.token_id}</span>
          </div>
          <div className="bidButtonContainer">
            <a href={activePunk.permalink}>
              <p>BID ON IT</p>
              <div className="priceContainer">
                <img src={weth} className="wethImage" alt="wethImage" />
                <div className="price">{activePunk.traits[0]?.value}</div>
              </div>
            </a>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img
                src={activePunk.creator.profile_img_url}
                alt={activePunk.creator.user.username}
              />
            </div>
            <div className="ownerDetails">
              <a
                href={`https://testnets.opensea.io/${activePunk.creator.user.username}`}
                className="ownernameAndHandle"
              >
                <p>{`${activePunk.creator.address.substring(0, 20)}...`}</p>
                <p className="ownerHandle">
                  @{activePunk.creator.user.username}
                </p>
              </a>
              <div className="ownerLinks">
                <div>
                  <img src={instagramLogo} alt="Instagram" />
                </div>
                <div>
                  <img src={twitterLogo} alt="Twitter" />
                </div>
                <div>
                  <img src={moreIcon} alt="More" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
