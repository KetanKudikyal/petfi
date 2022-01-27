/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Moralis from 'moralis/types';
import { Fragment } from 'react';
import { useMoralis } from 'react-moralis';

const navigation = [
  { name: 'Dashboard', href: '#', current: false },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  // const {
  //   getBalance,
  //   data: balance,
  //   nativeToken,
  //   error,
  //   isLoading,
  // } = useNativeBalance({ chain: 'avalanche testnet' });

  const getShortAddress = (user: Moralis.User<Moralis.Attributes> | null) => {
    if (isAuthenticated) {
      return (
        user?.get('ethAddress').slice(0, 5) +
        '...' +
        user?.get('ethAddress').slice(-5)
      );
    }
  };

  return (
    <Disclosure as='nav' className='bg-dark'>
      {({ open }) => (
        <>
          <div className='px-2 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='flex relative justify-between items-center h-16'>
              <div className='flex absolute inset-y-0 left-0 items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex justify-center items-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:ring-2 focus:ring-inset focus:ring-white focus:outline-none'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block w-6 h-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block w-6 h-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 justify-center items-center sm:justify-start sm:items-stretch'>
                <div className='flex flex-shrink-0 items-center cursor-pointer'>
                  <div className='flex flex-row items-center'>
                    <div>
                      <img
                        className='block w-auto h-10 lg:hidden'
                        src='/Logo.png'
                        alt='Workflow'
                      />
                    </div>
                    <h2 className='ml-2 text-4xl lg:hidden'>Petfi</h2>
                  </div>
                  <div className='flex flex-row items-center'>
                    <div>
                      <img
                        className='hidden w-auto h-10 lg:block'
                        src='/Logo.png'
                        alt='Workflow'
                      />
                    </div>
                    <h2 className='hidden ml-2 lg:block'>Petfi</h2>
                  </div>
                </div>
                <div className='hidden m-auto sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300  hover:text-pink',
                          'px-3 py-2 text-lg font-bold rounded-md '
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className='flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:pr-0 sm:ml-6'>
                <button
                  type='button'
                  onClick={() => (isAuthenticated ? authenticate() : logout())}
                  className='group inline-block relative px-5 py-2.5 font-medium text-white rounded'
                >
                  <span className='from-[#EF1186] absolute top-0 left-0 w-full h-full bg-gradient-to-br to-blue-500 rounded opacity-50 filter blur-sm'></span>
                  <span className='from-[#EF1186] group-active:opacity-0 to-[#F712A3] absolute inset-0 mt-0.5 ml-0.5 w-full h-full bg-gradient-to-br rounded opacity-50 filter'></span>
                  <span className='from-[#EF1186] group-active:opacity-0 to-[#F712A3] absolute inset-0 w-full h-full bg-gradient-to-br rounded shadow-xl filter transition-all duration-200 ease-out group-hover:blur-sm'></span>
                  <span className='from-[#F712A3] to-[#EF1186] absolute inset-0 w-full h-full bg-gradient-to-br rounded transition duration-200 ease-out'></span>
                  <span className='relative'>
                    {isAuthenticated ? getShortAddress(user) : 'Connect Wallet'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 text-base font-medium rounded-md'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
