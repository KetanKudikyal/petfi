/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

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
  return (
    <Disclosure as='nav' className='bg-dark'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 py-2 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between relative'>
              <div className='absolute flex inset-y-0 items-center left-0 sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <div className='flex flex-row items-center'>
                    <div>
                      <img
                        className='block h-10 w-auto lg:hidden'
                        src='/Logo.png'
                        alt='Workflow'
                      />
                    </div>
                    <h2 className='ml-2 lg:hidden'>Petfi</h2>
                  </div>
                  <div className='flex flex-row items-center'>
                    <div>
                      <img
                        className='h-10 hidden w-auto lg:block'
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
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'font-medium px-3 py-2 rounded-md text-sm'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute flex inset-y-0 items-center pr-2 right-0 sm:inset-auto sm:ml-6 sm:pr-0 sm:static'>
                <a
                  href='#_'
                  className='font-medium font-medium group inline-block px-5 py-2.5 relative rounded text-white'
                >
                  <span className='absolute bg-gradient-to-br blur-sm filter from-purple-600 h-full left-0 opacity-50 rounded to-blue-500 top-0 w-full'></span>
                  <span className='absolute bg-gradient-to-br filter from-purple-600 group-active:opacity-0 h-full inset-0 ml-0.5 mt-0.5 opacity-50 rounded to-blue-500 w-full'></span>
                  <span className='absolute bg-gradient-to-br duration-200 ease-out filter from-purple-600 group-active:opacity-0 h-full inset-0 rounded shadow-xl to-blue-500 transition-all w-full group-hover:blur-sm'></span>
                  <span className='absolute bg-gradient-to-br duration-200 ease-out from-blue-500 h-full inset-0 rounded to-purple-600 transition w-full'></span>
                  <span className='relative'>Connect wallet</span>
                </a>
                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='pb-3 pt-2 px-2 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block font-medium px-3 py-2 rounded-md text-base'
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
