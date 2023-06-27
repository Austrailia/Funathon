// import { findByLabelText } from '@testing-library/react';
import React from 'react';
import { useState } from 'react';
export default function LandingPage() {
  //const [text, setText] = useState('');

  return (
    <div className=''>
      <div className=''>
        <img
          className='sm:w-full sm:h-64 md:h-96'
          src='https://media.istockphoto.com/photos/textbooks-on-wooden-school-desk-with-chalkboard-picture-id1033277722?b=1&k=20&m=1033277722&s=170667a&w=0&h=sPkUuyDN23-yM5CHNN03qLo7Azph_Ud_SEcAJhelcjE='
          alt=''
        />

        <div className=''>
          <h1 className='sm:flex sm:items-center sm:justify-center sm: text-white sm:-mt-52 sm:font-bold sm:text-2xl md:-mt-64 lg:text-3xl'>
            Learning
          </h1>
          <h1 className='flex items-center justify-center text-white mt-6 font-bold text-4xl lg:text-5xl'>
            Starts with you
          </h1>
        </div>
      </div>
      <div className='bg-white w-full pt-32'>
        <div className='md:mt-24'>
          <div className='flex items-center justify-center text-black font-bold text-2xl mt-6 lg:text-4xl'>
            <h1>We conserve land through outreach</h1>
          </div>
          <div className='flex items-center justify-center text-black text-l mt-32.5 pt-8'>
            <p className='text-xs text-black mx-16 text-center lg:text-xl lg:pl-24 lg:pr-24'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
              tincidunt nunc pulvinar sapien et ligula ullamcorper.
            </p>
          </div>
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-1 sm:grid-rows-2 sm:gap-24 sm:mt-24 md:grid md:grid-cols-1'>
        <div className='md:grid md:grid-cols-2 md:grid-rows-1 md:-mb-24 '>
          <img
            src='https://images.cloudflareapps.com/ij5s5higSzWcOB6vks5Q_background-1.jpeg'
            alt=''
          />
          <div className='md:mt-12 lg:mt-28'>
            <h2 className='flex items-center justify-center text-black font-bold text-2xl mt-2 lg:text-2xl'>
              Suscipit adipiscing
            </h2>
            <p className='text-xs text-black mx-16 text-center mt-4 lg:text-base '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
              tincidunt nunc pulvinar sapien et ligula ullamcorper.
            </p>
          </div>
        </div>

        <div className='sm:mt-12 md:grid md:grid-cols-2 md:grid-rows-1 md:-mb-24 sm:-mb-24'>
          <div className='md:mt-12 lg:mt-36'>
            <h2 className='flex items-center justify-center text-black font-bold text-2xl mt-2 lg:text-2xl'>
              Suscipit adipiscing
            </h2>
            <p className='text-xs text-black mx-16 text-center mt-4 lg:text-base'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
              tincidunt nunc pulvinar sapien et ligula ullamcorper.
            </p>
          </div>
          <img
            className='sm:mt-2 mb-24'
            src='https://images.cloudflareapps.com/ij5s5higSzWcOB6vks5Q_background-1.jpeg'
            alt=''
          />
        </div>
      </div>

      <div className='bg-gray-100 mt-24 pt-4 pb-4'>
        <h2 className='flex items-center justify-center text-black font-bold text-2xl mt-2'>
          Suscipit adipiscing
        </h2>
        <p className='text-xs text-black mx-16 text-center mt-4 lg: '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
          tincidunt nunc pulvinar sapien et ligula ullamcorper.
        </p>
        <div className='flex items-center justify-center mt-4'>
          <div className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded h-10 ml-auto mr-auto'>
            <button class=' text-xs mb-99px'>Sign Up</button>
          </div>
        </div>
      </div>

      <div className='bg-gray-800 pt-24 flex items-center justify-center'>
        <footer>
          <div className='text-white text-xs -mt-16 grid grid-cols-1 grid-rows-2'>
            <p className=''>
              123 Demo Road, Bankok TH | 444-444-4444 | email@outlook.com
            </p>
            <p className='mt-2 flex justify-center'>Made with Bananas</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
