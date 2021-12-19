import React from 'react';
import { getProviders, signIn as singIntoProvider } from 'next-auth/react';
import fblogo from '../../public/images/Facebook-logo.png';
import lnkdin from '../../public/images/LinkedIn_icon_circle.svg.png';
import Image from 'next/image';

const signIn = ({ providers }) => {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div
          key={provider.name}
          className='flex justify-center items-center h-screen'
        >
            <div className='flex flex-col items-center'>
          <Image
            src={fblogo}
            width={600}
            height={400}
            layout='fixed'
            alt='logo'
            objectFit='contain'
          />
        
          <p className='font-xs italic p-5'>
            Developed by{' '}
            <a href='https://www.linkedin.com/in/azizul-hakim-0132a5169/' className='text-decoration-line: underline'>
              Azizul Hakim
            </a>
          </p>
         </div>
          <button
            className='p-3 bg-blue-500 rounded-lg text-white'
            onClick={() => singIntoProvider(provider.id, { callbackUrl: '/' })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export async function getServerSideProps(ctx) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signIn;
