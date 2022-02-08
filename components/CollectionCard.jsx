import React from "react";
import weth from "../assets/weth.png";
import Image from "next/image";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt={name} />
      <div className="details">
        <div className="name">
          {name}
          <div className="id">#{id}</div>
        </div>
        <div className="priceContainer">
          <Image
            src={weth}
            className="wethImage"
            alt="wethImage"
            width={12}
            height={20}
          />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
