import React from 'react';

const HeroSection = () => {
     return (
          <div className='flex-grow bg-gray-200 grid place-items-center'>
               <div className='grid grid-cols-1 gap-20 w-4/5'>
                    <div className='w-5/6 aspect-square bg-green-100 rounded-full mx-auto'></div>
                    <h1 className='text-lg'>
                         Hi, I am Ehsan. Front end and Back end developer.
                    </h1>
               </div>
          </div>
     );
};

export default HeroSection;
