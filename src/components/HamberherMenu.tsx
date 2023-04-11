import Link from 'next/link';
import { useState } from 'react';

const HambergerMenu = () => {
     const [active, setActive] = useState<boolean>(false);

     const firstLineStyel = `${
          active ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-2'
     }`;
     const secondLineStyle = `${active ? 'hidden' : 'inline'}`;
     const thirdLineStyle = `${
          active ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-2'
     }`;

     return (
          <>
               <div
                    className='hamberger-menu w-10 h-10 bg-red-200 ml-auto relative md:hidden'
                    onClick={() => setActive(!active)}
               >
                    <span
                         className={`transition-all duration-300 absolute w-5/6 h-1 bg-black rounded-lg left-1/2 -translate-x-1/2 ${firstLineStyel}`}
                    ></span>
                    <span
                         className={`transition-all duration-300 absolute w-5/6 h-1 bg-black rounded-lg top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ${secondLineStyle}`}
                    ></span>
                    <span
                         className={`transition-all duration-300 absolute w-5/6 h-1 bg-black rounded-lg left-1/2 -translate-x-1/2 ${thirdLineStyle}`}
                    ></span>
               </div>
               <div
                    className={`list fixed top-[4.5rem] w-full bg-red-200 -ml-4 transition-all duration-300 ${
                         active ? 'block' : 'hidden'
                    }`}
               >
                    <ul className='space-x-4 grid grid-cols-3  md:hidden'>
                         <li className='transition-all duration-300 hover:text-gray-500 p-3'>
                              <Link href='/' onClick={() => setActive(false)}>
                                   Home
                              </Link>
                         </li>
                         <li className='transition-all duration-300 hover:text-gray-500 p-3'>
                              <Link
                                   href='/projects'
                                   onClick={() => setActive(false)}
                              >
                                   Projects
                              </Link>
                         </li>
                         <li className='transition-all duration-300 hover:text-gray-500 p-3'>
                              <Link
                                   href='/about'
                                   onClick={() => setActive(false)}
                              >
                                   About Me
                              </Link>
                         </li>
                    </ul>
               </div>
          </>
     );
};

export default HambergerMenu;
