import React, { ReactNode, useEffect, useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiRedux } from 'react-icons/si';
import {
     TbBrandNextjs,
     TbBrandJavascript,
     TbBrandKotlin,
} from 'react-icons/tb';
import { useScrollContext } from '@/context/context';
import useObserver from '@/hooks/useObserver';
import { DiNodejsSmall } from 'react-icons/di';
import Observer from '@/util/Observer';

const Skills = () => {
     const { setActive } = useScrollContext();

     useEffect(() => {
          const observer = Observer(setActive, 'SKILLS');
          observer('SKILLS');
     }, []);

     return (
          <div>
               <div className='spacer h-20'></div>
               <div id='SKILLS' className='spacer h-20'></div>
               <h4 className=' px-5 py-2 rounded-full border-selected-border border-2 inline-block mb-[5rem]'>
                    MY SKILLS
               </h4>
               <div className='skill-container grid grid-cols-2 gap-5 lg:grid-cols-4 md:grid-cols-3'>
                    <SkillsCard
                         percent={95}
                         icon={
                              <TbBrandJavascript className='text-2xl lg:text-7xl' />
                         }
                         title='JavaScript'
                    />
                    <SkillsCard
                         percent={100}
                         icon={<FaReact className='text-2xl lg:text-7xl' />}
                         title='React'
                    />
                    <SkillsCard
                         percent={95}
                         icon={
                              <TbBrandNextjs className='text-2xl lg:text-7xl' />
                         }
                         title='NextJs'
                    />
                    <SkillsCard
                         percent={95}
                         icon={
                              <DiNodejsSmall className='text-2xl lg:text-7xl' />
                         }
                         title='NodeJs'
                    />
                    <SkillsCard
                         percent={95}
                         icon={
                              <SiTailwindcss className='text-2xl lg:text-7xl' />
                         }
                         title='Tailwind'
                    />
                    <SkillsCard
                         percent={95}
                         icon={<SiMongodb className='text-2xl lg:text-7xl' />}
                         title='MongoDB'
                    />
                    <SkillsCard
                         percent={95}
                         icon={<SiRedux className='text-2xl lg:text-7xl' />}
                         title='Redux'
                    />
                    <SkillsCard
                         percent={95}
                         icon={
                              <TbBrandKotlin className='text-2xl lg:text-7xl' />
                         }
                         title='Kotlin'
                    />
               </div>
          </div>
     );
};

interface Props {
     icon: ReactNode;
     percent: number;
     title: string;
}

const SkillsCard = ({ icon, percent, title }: Props) => {
     const [active, setActive] = useState<boolean>(false);

     return (
          <div
               onMouseEnter={() => setActive(true)}
               onMouseLeave={() => setActive(false)}
               className={`skill-item border-2 border-selected-border rounded-full flex flex-col justify-center items-center p-10 space-y-2 md:w-full md:p-14 ${
                    active
                         ? 'border-selected-primary'
                         : 'border-selected-border'
               } transition-all duration-500`}
          >
               {icon}
               <h2 className='text-xl md:text-3xl text-selected-primary'>
                    {percent}%
               </h2>
               <h1 className='text-xl md:text-2xl'>{title}</h1>
          </div>
     );
};

export default Skills;
