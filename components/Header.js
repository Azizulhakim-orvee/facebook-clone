import Image from 'next/image';
import React from 'react';
import fblogo from '../public/images/Facebook-logo.png';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
import { signIn, signOut, useSession } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
      {/* Left */}
      <div className='flex items-center'>
        <Image src={fblogo} width={70} height={45} layout='fixed' alt='logo' />

        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-6 text-gray-600' />
          <input
            className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink'
            type='text'
            placeholder='Search facebook'
          />
        </div>
      </div>
      {/* Center */}
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className='flex items-center sm:space-x-2 justify-end'>
        {/* Profile pic */}

        {session ? (
          <>
            <img
              src={session?.user?.image}
              alt='profile pic'
              className='h-10 w-10 rounded-full cursor-pointer'
            />
            <div
              className='whitespace-nowrap font-semibold pr-3 cursor-pointer'
              onClick={signOut}
            >
              {session?.user?.name}
              <p className='text-xs text-center text-gray-400'>Sign out</p>
            </div>
          </>
        ) : (
          <p
            className='whitespace-nowrap font-semibold pr-3 cursor-pointer animate-bounce'
            onClick={signIn}
          >
            Sign In
          </p>
        )}

        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />
      </div>
    </div>
  );
};

export default Header;
