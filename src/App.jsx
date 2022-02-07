import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

export async function getServerSideProps() {
  const punkListData = await axios.get(
    "https://proxy-cors-ap.herokuapp.com/https://testnets-api.opensea.io/assets?asset_contract_address=0xd32560e746Dadea82466A5eCDFb54dAe036d0289&order_direction=asc"
  );
  return {
    props: {
      punkListData: punkListData.data.assets,
    },
  };
}

export default function App({ punkListData }) {
  const [selectedPunk, setSelectedPunk] = useState(0);

  return (
    <div className="app">
      <Header />
      {punkListData?.length > 0 ? (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flex: 1,
            color: "#737373",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "25%",
          }}
        >
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
