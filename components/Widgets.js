import React from 'react';
import azprof from '../public/images/orvi_new.jpg';
import sunjprof from '../public/images/sunjida 2.jpg';
import masprof from '../public/images/musk.jpg';
import jhprof from '../public/images/jhankar.jpg';
import suprof from '../public/images/sumit 2.jpg';
import hero from '../public/images/hero.jpg';
import meme from '../public/images/meme.png';
import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';

const contacts = [
  { src: azprof, name: 'Azizul Hakim' },
  { src: sunjprof, name: 'Sunjida Khanam' },
  { src: masprof, name: 'Mask bhai' },
  { src: jhprof, name: 'Jhankar Mahbub' },
  { src: suprof, name: 'Sumit Saha' },
  { src: hero, name: "Hero Alam" },
  {src: meme, name: "Meme Dude"}
];

const Widgets = () => {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5 mr-5'>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-xl '> Contacts </h2>
        <div className='flex space-x-2'>
          <VideoCameraIcon className='h-6' />
          <SearchIcon className='h-6' />
          <DotsHorizontalIcon className='h-6' />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.name} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
};

export default Widgets;
