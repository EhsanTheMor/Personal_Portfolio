import React from 'react';

const Services = () => {
     return (
          <div className='mb-40'>
               <h4 className=' px-5 py-2 rounded-full border-selected-border border-2 inline-block mb-[5rem]'>
                    SERVICES
               </h4>
               <div className='skill-container space-y-5'>
                    <div className='skill-item w-full border-2 border-selected-border rounded-3xl p-10'>
                         <div className='holder flex text-[24px] mb-[8px]'>
                              <h2>MSC Photonics</h2>
                              <h3 className='ml-auto'>Icon</h3>
                         </div>
                         <p className='text-[14px] mb-[30px] text-selected-paragraph'>
                              2017-2020
                         </p>
                         <p>Tabriz Univrsity</p>
                    </div>
                    <div className='skill-item w-full border-2 border-selected-border rounded-3xl p-10'>
                         <div className='holder flex text-[24px] mb-[8px]'>
                              <h2>Bachelor Optics and Laser</h2>
                              <h3 className='ml-auto'>Icon</h3>
                         </div>
                         <p className='text-[14px] mb-[30px] text-selected-paragraph'>
                              2013-2017
                         </p>
                         <p>Bonab University</p>
                    </div>
               </div>
          </div>
     );
};

export default Services;
