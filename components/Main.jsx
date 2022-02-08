import React, { useEffect, useState } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import weth from "../assets/weth.png";
import Image from "next/image";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  let creatorAddress = activePunk?.creator?.address;
  let shortAddress = `${creatorAddress?.substring(
    0,
    4
  )}...${creatorAddress?.substring(
    creatorAddress?.length,
    creatorAddress?.length - 3
  )}`;

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              src={activePunk?.image_original_url}
              alt={activePunk?.name}
              className="selectedPunk"
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activePunk?.name}
            <span className="itemNumber">#{activePunk?.token_id}</span>
          </div>
          <div className="bidButtonContainer">
            <a href={activePunk?.permalink}>
              <p>BID ON IT</p>
              <div className="priceContainer">
                <Image
                  width={12}
                  height={20}
                  src={weth}
                  className="wethImage"
                  alt="wethImage"
                />
                <div className="price">{activePunk?.traits[0]?.value}</div>
              </div>
            </a>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <Image
                src={activePunk?.creator?.profile_img_url}
                alt={activePunk?.creator?.user?.username}
                width={80}
                height={80}
              />
            </div>
            <div className="ownerDetails">
              <a
                href={`https://testnets.opensea.io/${activePunk?.creator?.user?.username}`}
                className="ownerNameAndHandle"
              >
                <p>{shortAddress}</p>
                <p className="ownerHandle">
                  @{activePunk?.creator?.user?.username}
                </p>
              </a>
              <div className="ownerLinks">
                <div className="ownerLinkImage">
                  <Image
                    width={35}
                    height={35}
                    src={instagramLogo}
                    alt="Instagram"
                  />
                </div>
                <div className="ownerLinkImage">
                  <Image
                    width={35}
                    height={35}
                    src={twitterLogo}
                    alt="Twitter"
                  />
                </div>
                <div className="ownerLinkImage">
                  <Image width={35} height={35} src={moreIcon} alt="More" />
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
