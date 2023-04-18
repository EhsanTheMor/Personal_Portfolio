import PersonCard from './../components/PersonCard';
import Sections from './../components/Sections';
import Navbar from './../components/Navbar';
import { useState } from 'react';

export default function Home() {
     return (
          <div className='w-screen relative bg-selected-dark px-4 lg:grid-cols-3 lg:grid text-selected-white lg:h-screen'>
               <PersonCard />
               <Sections />
               <Navbar />
          </div>
     );
}
