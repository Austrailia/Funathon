import { findByLabelText } from '@testing-library/react';
import React from 'react';

export default function LandingPage() {
  return (
    <body>
      <div className='position-relative'>
        <img
          className='w-full h-64'
          src='https://media.istockphoto.com/photos/textbooks-on-wooden-school-desk-with-chalkboard-picture-id1033277722?b=1&k=20&m=1033277722&s=170667a&w=0&h=sPkUuyDN23-yM5CHNN03qLo7Azph_Ud_SEcAJhelcjE='
        />
        <h1 className='flex items-center justify-center text-blue-700 -mt-92'>
          Creation
        </h1>
      </div>
    </body>
  );
}
