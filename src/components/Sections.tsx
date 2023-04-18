import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import Introduction from './Introduction';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';

const Sections = () => {
     return (
          <div className='col-span-2 py-16 px-3 lg:pr-64  lg:overflow-y-scroll'>
               <Introduction />
               <About />
               <Education />
               <Experience />
               <Skills />
               <Contact />
          </div>
     );
};

export default Sections;
