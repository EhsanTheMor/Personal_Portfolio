import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
     const [active, setActive] = useState<string>('');

     return (
          <div className='bg-green-100 grid grid-cols-3 p-4 text-lg'>
               <h1>Logo</h1>
               <ul className='flex space-x-4 mx-auto'>
                    <li
                         className={`${
                              active === 'Home' && 'text-gray-500'
                         } transition-all duration-300 hover:text-gray-500`}
                    >
                         <Link href='/' onClick={() => setActive('Home')}>
                              Home
                         </Link>
                    </li>
                    <li
                         className={`${
                              active === 'Projects' && 'text-gray-500'
                         } transition-all duration-300 hover:text-gray-500`}
                    >
                         <Link
                              href='/projects'
                              onClick={() => setActive('Projects')}
                         >
                              Projects
                         </Link>
                    </li>
                    <li
                         className={`${
                              active === 'About' && 'text-gray-500'
                         } transition-all duration-300 hover:text-gray-500`}
                    >
                         <Link href='/about' onClick={() => setActive('About')}>
                              About Me
                         </Link>
                    </li>
               </ul>
          </div>
     );
};

export default Navbar;
