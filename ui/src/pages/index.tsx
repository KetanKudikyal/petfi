import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section>
          <Header />
          <div className='flex flex-col items-center justify-center layout min-h-screen text-center'>
            <h1>Welcome to Petfi</h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}
