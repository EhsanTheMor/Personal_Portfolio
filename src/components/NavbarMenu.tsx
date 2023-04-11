import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
     active: string;
     setActive: Dispatch<SetStateAction<string>>;
}

const NavbarMenu = ({ active, setActive }: Props) => {
     return (
          <>
               <ul className='space-x-4 ml-auto hidden md:flex'>
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
          </>
     );
};

export default NavbarMenu;
