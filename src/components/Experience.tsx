import { useScrollContext } from '@/context/context';
import useObserver from '@/hooks/useObserver';
import { useEffect, useState } from 'react';

const data = [
     {
          id: 1,
          date: '2018-Present',
          title: 'Personal and university project on web development.',
          dis: [
               'Gain full Knowledge on JavaScript, ReactJs, Redux.',
               'Comperhensive understanding on NextJs, Static page, and Server side rendering.',
               'Considerable foundation on web development basics such as HTML, Css, Sass, Tailwind, and Material-ui.',
          ],
     },
     {
          id: 2,
          date: '2018-Present',
          title: 'Low Earth orbit satellite motion simulation with Matlab.',
          dis: [
               'Optimization algorithms such as: Genetic and Particle swarm optimization.',
               'Practical usage of solving nonlinear and entangled PDE equations.',
               'Iterative algorithms.',
          ],
     },
     {
          id: 3,
          date: '2016-2018',
          title: 'Setting up Earthquake database and data analyze with Matlab.',
          dis: ['Algorithmic thinking and structural programming.'],
     },
];

const Experience = () => {
     const { setActive } = useScrollContext();

     useEffect(() => {
          const observer = useObserver(setActive, 'EXPERIENCES');
          observer();
     }, []);

     return (
          <div>
               <div className='spacer h-20'></div>
               <div id='EXPERIENCES' className='spacer h-20'></div>

               <h4 className=' px-5 py-2 rounded-full border-selected-border border-2 inline-block mb-[5rem]'>
                    EXPERIENCES
               </h4>
               <h1 className='text-[48px] leading-[60px] mb-[4rem]'>
                    <span className='text-selected-primary'>Experiences</span>
               </h1>
               {data.map((el, index) => (
                    <ExperienceCard
                         key={el.id}
                         date={el.date}
                         title={el.title}
                         description={el.dis}
                    />
               ))}
          </div>
     );
};

interface experienceCardProps {
     date: string;
     title: string;
     description: string[];
}

const ExperienceCard = ({ date, title, description }: experienceCardProps) => {
     const [active, setActive] = useState<boolean>(false);

     return (
          <div
               onMouseEnter={() => setActive(true)}
               onMouseLeave={() => setActive(false)}
               className='px-5 relative box-content pb-[50px] md:px-20'
          >
               <span
                    style={{ transform: 'translate(-50%, calc(-50% + 5px))' }}
                    className={`w-[2px] h-full inline-block absolute left-0 top-1/2 ${
                         active ? 'bg-selected-primary' : 'bg-selected-border'
                    } transition-all duration-500`}
               ></span>
               <span
                    className={`inline-block w-4 aspect-square rounded-full absolute left-0 top-0 translate-y-1 -translate-x-1/2 ${
                         active ? 'bg-selected-primary' : 'bg-selected-border'
                    } transition-all duration-500`}
               ></span>
               <h5 className='text-selected-paragraph text-[16px] mb-7'>
                    {date}
               </h5>
               <h2 className='text-[24px] mb-[5px]'>{title}</h2>
               <ul className='pl-4'>
                    {description.map((el, index) => (
                         <li
                              key={index}
                              className='text-selected-paragraph text-[18px] list-disc'
                         >
                              {el}
                         </li>
                    ))}
               </ul>
          </div>
     );
};

export default Experience;
