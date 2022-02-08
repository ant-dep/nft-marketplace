import { MoralisProvider } from "react-moralis";
import { config } from "../config";
import "../styles/globals.css";
import "../styles/collectionCard.css";
import "../styles/header.css";
import "../styles/main.css";
import "../styles/punkList.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={config.MORALIS_APP_ID}
      serverUrl={config.MORALIS_SERVER_URL}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
