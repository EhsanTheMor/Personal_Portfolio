import useObserver from '@/hooks/useObserver';
import { useScrollContext } from './../context/context';
import React, { useEffect } from 'react';
import Observer from '@/util/Observer';

const About = () => {
     const { setActive } = useScrollContext();

     useEffect(() => {
          const observer = Observer(setActive, 'ABOUT');
          observer('ABOUT');
     }, []);

     return (
          <div>
               <div className='spacer h-20'></div>
               <div id='ABOUT' className='spacer h-20'></div>
               <h4 className=' px-5 py-2 rounded-full border-selected-border border-2 inline-block mb-[5rem]'>
                    ABOUT
               </h4>
               <h1 className='text-[30px] leading-[1.2] md:text-[48px] md:leading-[60px] mb-[4rem]'>
                    Every great design begin with an even
                    <span className='text-selected-primary'> better story</span>
               </h1>
               <h5 className='leading-[30px] text-[16px] text-selected-paragraph'>
                    As a full-stack web developer, I specialize in crafting
                    elegant and functional websites and web applications. With
                    expertise in both front-end and back-end development,
                    I&apos;m committed to creating responsive, user-friendly
                    interfaces that drive engagement and deliver results. From
                    database design and development to server-side programming
                    and deployment, I love working with cutting-edge technology
                    and delivering solutions that exceed expectations. Simply
                    put, I build great websites because I love what I do.
               </h5>
          </div>
     );
};

export default About;
