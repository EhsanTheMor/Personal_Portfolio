import Link from 'next/link';
import React from 'react';

const Error = () => {
     return (
          <div className='grid place-items-center h-screen'>
               <div>
                    <h1 className='text-5xl'>Page not found</h1>
                    <Link href='/'>Go to home page</Link>
               </div>
          </div>
     );
};

export default Error;
