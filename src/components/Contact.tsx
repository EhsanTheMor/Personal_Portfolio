import useObserver from '@/hooks/useObserver';
import { useScrollContext } from './../context/context';
import React, { ReactNode, useEffect } from 'react';
import { HiOutlineMail, HiOutlineDeviceMobile } from 'react-icons/hi';

const Contact = () => {
     const { setActive } = useScrollContext();

     useEffect(() => {
          const observer = useObserver(setActive, 'CONTACT');
          observer();
     }, []);

     return (
          <div>
               <div className='spacer h-20'></div>
               <div id='CONTACT' className='spacer h-20'></div>
               <h4 className=' px-5 py-2 rounded-full border-selected-border border-2 inline-block mb-[5rem]'>
                    CONTACT
               </h4>
               <ContactCard
                    title={`Ehsan.Morshedzadeh@gmail.com`}
                    icon={<HiOutlineMail />}
               />
               <ContactCard
                    title='09308697903'
                    icon={<HiOutlineDeviceMobile />}
               />
          </div>
     );
};

interface Props {
     title: string;
     icon: ReactNode;
}

const ContactCard = ({ title, icon }: Props) => {
     let titleToShow: string | ReactNode;
     if (title.includes('@')) {
          const list = title.split('@');
          titleToShow = (
               <>
                    <span>{list[0]}</span>
                    <span>@{list[1]}</span>
               </>
          );
     } else {
          titleToShow = title;
     }

     return (
          <div
               onClick={() => {
                    navigator.clipboard.writeText(title);
                    alert('copied to clipboard');
               }}
               className='card flex flex-col items-center text-2xl mb-8 lg:text-4xl lg:flex-row'
          >
               <span className='text-selected-paragraph flex items-center'>
                    {icon}:
               </span>
               <a className='ml-2 transition-all duration-500 hover:cursor-pointer hover:text-selected-primary flex flex-wrap justify-center'>
                    {titleToShow}
               </a>
          </div>
     );
};

export default Contact;
