import { useScrollContext } from '@/context/context';
import useObserver from '@/hooks/useObserver';
import Observer from '@/util/Observer';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { GiLaserBurst, GiLaserPrecision } from 'react-icons/gi';

const Education = () => {
     const { setActive } = useScrollContext();

     useEffect(() => {
          const observer = Observer(setActive, 'EDUCATION');
          observer('EDUCATION');
     }, []);

     return (
          <div>
               <div className='spacer h-20'></div>
               <div id='EDUCATION' className='spacer h-20'></div>
               <h4 className=' px-5 py-2 rounded-full border-selected-border border-2 inline-block mb-[5rem]'>
                    EDUCATION
               </h4>
               <div className='skill-container space-y-5'>
                    <EducationCard
                         title='MSC Photonics'
                         icon={<GiLaserPrecision className='text-3xl' />}
                         date='2017-2020'
                         uni='Tabriz University'
                    />
                    <EducationCard
                         title='Bachelor Optics and Laser'
                         icon={<GiLaserBurst className='text-3xl' />}
                         date='2013-2017'
                         uni='Bonab University'
                    />
               </div>
          </div>
     );
};

interface CardProps {
     title: string;
     icon: ReactNode;
     date: string;
     uni: string;
}

const EducationCard = ({ title, icon, date, uni }: CardProps) => {
     const [active, setActive] = useState<boolean>(false);

     return (
          <div
               onMouseEnter={() => setActive(true)}
               onMouseLeave={() => setActive(false)}
               className={`skill-item w-full border-2 rounded-3xl p-10 transition-all duration-500 ${
                    active
                         ? 'border-selected-primary'
                         : 'border-selected-border'
               }`}
          >
               <div className='holder flex text-[24px] mb-[8px]'>
                    <h2>{title}</h2>
                    <h3 className='ml-auto'>{icon}</h3>
               </div>
               <p className='text-[14px] mb-[30px] text-selected-paragraph'>
                    {date}
               </p>
               <p>{uni}</p>
          </div>
     );
};

export default Education;
