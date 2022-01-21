import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Header from '@/components/layout/Header';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className='bg-white'>
          <Header />
          <div className='flex flex-col items-center justify-center layout min-h-screen text-center'>
            <h1>Next.js + Tailwind CSS + TypeScript Starter</h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}
