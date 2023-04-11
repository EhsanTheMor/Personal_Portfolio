import React from 'react';

const HeroSection = () => {
     return (
          <div className='flex-grow bg-gray-200 grid place-items-center'>
               <div className='grid grid-cols-1 gap-y-20 w-4/5 sm:grid-cols-2 sm:gap-x-10 sm:w-2/3'>
                    <div className='w-4/5 aspect-square bg-green-100 rounded-full mx-auto'></div>
                    <h1 className='text-lg  flex flex-col justify-center'>
                         <span className='block text-2xl font-bold'>
                              Hi, I am Ehsan.
                         </span>
                         <h1 className='text-5xl'>
                              Front end <br />
                              and
                              <br /> Back end developer.
                         </h1>
                    </h1>
               </div>
          </div>
     );
};

export default HeroSection;
