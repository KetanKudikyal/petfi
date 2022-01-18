import { ChakraProvider } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";

const appId = process.env.NEXT_PUBLIC_APP_ID;
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </MoralisProvider>
  );
}

export default MyApp;
