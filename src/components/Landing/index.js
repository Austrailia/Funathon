// import { findByLabelText } from '@testing-library/react';
import React from 'react';
import { useState } from 'react';
export default function LandingPage() {
  //const [text, setText] = useState('');

  return (
    <div className=''>
      <div className=''>
        <img
          className='w-full h-64'
          src='https://media.istockphoto.com/photos/textbooks-on-wooden-school-desk-with-chalkboard-picture-id1033277722?b=1&k=20&m=1033277722&s=170667a&w=0&h=sPkUuyDN23-yM5CHNN03qLo7Azph_Ud_SEcAJhelcjE='
          alt=''
        />

        <div className=''>
          <h1 className='flex items-center justify-center text-white -mt-52 font-bold text-2xl'>
            Learning
          </h1>
          <h1 className='flex items-center justify-center text-white mt-6 font-bold text-4xl'>
            Starts with you
          </h1>
        </div>
      </div>
      <div className='bg-white w-full pt-32'>
        <div className='flex items-center justify-center text-black font-bold text-2xl mt-6'>
          <h1>We conserve land through outreach</h1>
        </div>
        <div className='flex items-center justify-center text-black text-l mt-32.5 pt-8'>
          <p className='text-xs text-black mx-16 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            tincidunt nunc pulvinar sapien et ligula ullamcorper.
          </p>
        </div>
        <div className='grid grid-cols-1 grid-rows-2 gap-4 mt-24'>
          <div>
            <img
              src='https://images.cloudflareapps.com/ij5s5higSzWcOB6vks5Q_background-1.jpeg'
              alt=''
            />
            <div>
              <h2 className='flex items-center justify-center text-black font-bold text-2xl mt-2'>
                Suscipit adipiscing
              </h2>
              <p className='text-xs text-black mx-16 text-center mt-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Massa tincidunt nunc pulvinar sapien et ligula ullamcorper.
              </p>
            </div>
          </div>
          <div className='mt-12'>
            <img
              src='https://images.cloudflareapps.com/ij5s5higSzWcOB6vks5Q_background-1.jpeg'
              alt=''
            />
            <div>
              <h2 className='flex items-center justify-center text-black font-bold text-2xl mt-2'>
                Suscipit adipiscing
              </h2>
              <p className='text-xs text-black mx-16 text-center mt-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Massa tincidunt nunc pulvinar sapien et ligula ullamcorper.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-100 mt-24 pt-4 pb-4'>
        <h2 className='flex items-center justify-center text-black font-bold text-2xl mt-2'>
          Suscipit adipiscing
        </h2>
        <p className='text-xs text-black mx-16 text-center mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
          tincidunt nunc pulvinar sapien et ligula ullamcorper.
        </p>
        <div className='flex items-center justify-center mt-4'>
          <input className='' type='text'></input>
          <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded h-6 text-xs '>
            Sign up
          </button>
        </div>
      </div>
      <div className='bg-gray-900'>
        <footer>
          <p>781-692-6219</p>
        </footer>
      </div>
    </div>
  );
}
