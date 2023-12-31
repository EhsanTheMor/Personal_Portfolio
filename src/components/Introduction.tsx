import { useScrollContext } from '@/context/context';
import useObserver from '@/hooks/useObserver';
import Observer from '@/util/Observer';
import React, { use, useEffect } from 'react';

const Introduction = () => {
     const { setActive } = useScrollContext();

     useEffect(() => {
          const observer = Observer(setActive, 'INTRODUCE');
          observer('INTRODUCE');
     }, []);

     return (
          <div>
               <h4
                    id='INTRODUCE'
                    className=' px-5 py-2 rounded-full border-selected-border border-2 inline-block mb-[5rem]'
               >
                    INTRODUCE
               </h4>
               <h1 className='text-[30px] leading-[1.2] mb-[4rem] md:text-[50px] md:leading-[1.3] lg:text-[78px] lg:leading-[90px]'>
                    Say Hi from
                    <span className='text-selected-primary'> Ehsan</span>,
                    FrontEnd and BackEnd Developer
               </h1>
               <h5 className='leading-[30px] text-[16px] text-selected-paragraph'>
                    I&apos;m always up for a programming challenge, wherever it
                    may be.
               </h5>
               <a
                    href='#'
                    className='ml-auto block w-fit mt-20 py-2 px-5 rounded-full border-2 border-selected-border '
               >
                    MY PROJECTS
               </a>
          </div>
     );
};

export default Introduction;
