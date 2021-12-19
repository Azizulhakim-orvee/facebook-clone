import Image from 'next/image';
import React from 'react';
import fblogo from '../public/images/Facebook-logo.png';
import lnkdin from '../public/images/LinkedIn_icon_circle.svg.png';
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className='grid place-items-center'>
      <Image
        src={fblogo}
        width={600}
        height={400}
        layout='fixed'
        alt='logo'
        objectFit='contain'
      />
      <div className='p-5 bg-slate-500 grid place-items-center text-white cursor-pointer rounded-3xl shadow-lg border-b-2 hover:border-blue-900' onClick={signIn}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
          />
        </svg>
        <h1>Login with Google</h1>
      </div>
      <p className='font-xs italic p-5'>
        Developed by{' '}
        <a href='https://www.linkedin.com/in/azizul-hakim-0132a5169/'>
          Azizul Hakim
        </a>
      </p>
      <a href='https://www.linkedin.com/in/azizul-hakim-0132a5169/'>
        <Image
          src={lnkdin}
          alt='linkdin'
          width='25'
          height='25'
          objectFit='contain'
        />
      </a>
    </div>
  );
};

export default Login;
