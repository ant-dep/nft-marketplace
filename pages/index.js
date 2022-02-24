import Head from "next/head";
import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import PunkList from "../components/PunkList";
import Main from "../components/Main";

export async function getServerSideProps() {
  const punkListData = await axios.get(
    "https://testnets-api.opensea.io/assets?asset_contract_address=0xd32560e746Dadea82466A5eCDFb54dAe036d0289"
  );

  return {
    props: {
      punkListData: punkListData?.data?.assets.reverse(),
    },
  };
}

export default function Home({ punkListData }) {
  console.log(punkListData);
  const [selectedPunk, setSelectedPunk] = useState(0);

  return (
    <div className="app">
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="Web 3.0 nft marketplace" />
      </Head>
      <Header />
      {punkListData?.length !== 0 ? (
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
