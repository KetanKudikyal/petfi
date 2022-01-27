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
          <div className='layout flex flex-col justify-center items-center mt-40 text-center'>
            <h1 className='from-[#E81D6C] to-[#F6129E] text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br'>
              Welcome to Petfi
            </h1>
            <p className='mt-2'>
              Buy and sell your NFTs on our marketplace or try out an English or
              <br />a Dutch Auction.
            </p>
          </div>
          <div className='flex absolute inset-y-0 right-0 justify-center items-center pr-2 my-6 sm:static sm:inset-auto sm:pr-0 sm:ml-6'>
            <button
              type='button'
              className='group inline-block relative px-5 py-2.5 font-bold text-white rounded'
            >
              <span className='from-[#EF1186] absolute top-0 left-0 w-full h-full bg-gradient-to-br to-blue-500 rounded opacity-50 filter blur-sm'></span>
              <span className='from-[#EF1186] group-active:opacity-0 to-[#F712A3] absolute inset-0 mt-0.5 ml-0.5 w-full h-full bg-gradient-to-br rounded opacity-50 filter'></span>
              <span className='from-[#EF1186] group-active:opacity-0 to-[#F712A3] absolute inset-0 w-full h-full bg-gradient-to-br rounded shadow-xl filter transition-all duration-200 ease-out group-hover:blur-sm'></span>
              <span className='from-[#F712A3] to-[#EF1186] absolute inset-0 w-full h-full bg-gradient-to-br rounded transition duration-200 ease-out'></span>
              <span className='relative'>Mint NFT</span>
            </button>
          </div>
        </section>
      </main>
    </Layout>
  );
}
