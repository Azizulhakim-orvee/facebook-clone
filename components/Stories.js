import React from 'react';
import StoryCard from './StoryCard';
import azsrc from '../public/images/azizul 2.jpg';
import azprof from '../public/images/orvi_new.jpg';
import sunjsrc from '../public/images/sunjida.jpg';
import sunjprof from '../public/images/sunjida 2.jpg';
import massrc from '../public/images/mask 2.jpg';
import masprof from '../public/images/musk.jpg';
import jhsrc from '../public/images/jhankar 2.png';
import jhprof from '../public/images/jhankar.jpg';
import susrc from '../public/images/sumit.jpg';
import suprof from '../public/images/sumit 2.jpg';

const stories = [
  {
    name: 'Sunjida Khanam',
    src: sunjsrc,
    profile: sunjprof,
    key: 0,
  },
  {
    name: 'Azizul Hakim',
    src: azprof,
    profile: azsrc,
    key: 1,
  },
  {
    name: 'Sumit Saha',
    src: susrc,
    profile: suprof,
    key: 2,
  },
  {
    name: 'Jhankar Mahbub',
    src: jhprof,
    profile:  jhsrc,
    key: 3,
  },
  {
    name: 'Elon Musk',
    src: massrc,
    profile: masprof,
    key: 4,
  },
];

const Stories = () => {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.map((story) => (
        <StoryCard
          key={story.key}
          src={story.src}
          name={story.name}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
