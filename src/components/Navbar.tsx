import Link from 'next/link';
import React, { useState } from 'react';
import HambergerMenu from './HamberherMenu';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
     const [active, setActive] = useState<string>('');

     return (
          <div className='bg-green-100 grid grid-cols-2 p-4 px-20 text-lg'>
               <h1 className='flex items-center'>Logo</h1>
               <HambergerMenu />
               <NavbarMenu active={active} setActive={setActive} />
          </div>
     );
};

export default Navbar;
