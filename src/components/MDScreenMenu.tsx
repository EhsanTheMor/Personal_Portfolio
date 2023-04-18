import { useScrollContext } from '@/context/context';
import useCapitalize from '@/hooks/useCapitalize';
import React, { useRef } from 'react';

const MDScreenMenu = () => {
     const { active } = useScrollContext();
     const menu = useRef<HTMLDivElement>(null);
     const blurElement = useRef<HTMLDivElement>(null);
     const navListIds = [
          'INTRODUCE',
          'ABOUT',
          'EDUCATION',
          'EXPERIENCES',
          'SKILLS',
          'CONTACT',
     ];

     const clickHandler = () => {
          menu.current?.classList.remove('translate-x-full');
          blurElement.current?.classList.remove('hidden');
     };

     const scrollClick = (str: string) => {
          const item = document.getElementById(str);

          if (!item) return console.log('Something went wrong!!');

          blurElement.current?.classList.add('hidden');
          menu.current?.classList.add('translate-x-full');
          item?.scrollIntoView({
               behavior: 'smooth',
          });
     };

     return (
          <>
               <div
                    ref={menu}
                    className='fixed right-0 top-0 lg:hidden w-[300px] h-screen bg-[rgba(53,29,29,0.5)] z-40 translate-x-full transition-all duration-500 p-16 space-y-3'
               >
                    {navListIds.map(item => (
                         <h2
                              key={item}
                              onClick={() => scrollClick(item)}
                              className={`${
                                   active === item
                                        ? 'text-selected-primary'
                                        : 'text-white'
                              } hover:text-selected-primary hover:cursor-pointer`}
                         >
                              {useCapitalize(item)}
                         </h2>
                    ))}
               </div>
               <div
                    ref={blurElement}
                    onClick={e => {
                         blurElement.current?.classList.add('hidden');
                         menu.current?.classList.add('translate-x-full');
                    }}
                    className='fixed right-0 top-0 w-screen h-screen backdrop-blur-sm z-20 hidden'
               ></div>
               <div
                    onClick={() => clickHandler()}
                    className='fixed right-0 -translate-x-full top-10 lg:hidden'
               >
                    <h1 className=' aspect-square border-2 border-selected-border grid place-items-center p-4 rounded-full transition-all duration-500 text-selected-paragraph bg-selected-dark hover:border-selected-primary hover:text-selected-primary hover:cursor-pointer'>
                         Menu
                    </h1>
               </div>
          </>
     );
};

export default MDScreenMenu;
