import { AppProps } from 'next/app';
import { MoralisProvider } from 'react-moralis';

import '@/styles/globals.css';
import '@/styles/colors.css';

import Layout from '@/components/layout/Layout';

const appId = process.env.NEXT_PUBLIC_APP_ID;
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

function MyApp({ Component, pageProps }: AppProps) {
  if (!appId && !serverUrl) {
    throw Error(
      'Please set the environment variables NEXT_PUBLIC_APP_ID and NEXT_PUBLIC_SERVER_URL'
    );
  }

  if (appId && serverUrl) {
    return (
      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MoralisProvider>
    );
  }
}

export default MyApp;
