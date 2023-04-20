import { BiLocationPlus } from 'react-icons/bi';
import { AiOutlineGithub } from 'react-icons/ai';
import React from 'react';

const PersonCard = () => {
     return (
          <div className='container w-full h-full grid place-items-center'>
               <div className='card w-[80%] border-2 border-selected-border rounded-[2rem] px-5 py-10 lg:h-[90%] lg:w-[80%]'>
                    <div className='flex mt-3 items-baseline'>
                         <h1 className='text-3xl'>Ehsan</h1>
                         <p className='ml-auto'>FullStack Developer</p>
                    </div>
                    <div className='iamge-holder w-[90%] h-[90%] bg-green-100 mx-auto rounded-xl mt-5 sm:w-[200px] sm:h-[200px]'>
                         <img
                              src='profile.jpg'
                              className='rounded-xl'
                              alt='UserProfile'
                         />
                    </div>
                    <h2 className='justify-center text-2xl mt-5 flex flex-wrap'>
                         Ehsan.
                         <span>Morshedzadeh</span>
                         <span>@gmail.com</span>
                    </h2>
                    <h2 className='text-center text-2xl mt-5'>09308397903</h2>
                    <div className='text-2xl mt-5 flex justify-center items-center'>
                         <BiLocationPlus />
                         <span>: Tehran</span>
                    </div>
                    <div className='text-4xl flex justify-center mt-5 p-2 border-2 border-selected-border rounded-full text-selected-paragraph hover:cursor-pointer transition-all duration-500 hover:border-selected-primary hover:text-selected-primary'>
                         <AiOutlineGithub />
                    </div>
                    <div className='text-4xl flex justify-center mt-5 p-2 border-2 border-selected-border rounded-full text-selected-paragraph hover:cursor-pointer transition-all duration-500 hover:border-selected-primary hover:text-selected-primary'>
                         <a
                              href='Ehsan Morshedzadeh.pdf'
                              className='text-xl sm:text-2xl'
                         >
                              Download Resume
                         </a>
                    </div>
               </div>
          </div>
     );
};

export default PersonCard;
