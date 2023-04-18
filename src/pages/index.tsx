import PersonCard from './../components/PersonCard';
import Sections from './../components/Sections';
import Navbar from './../components/Navbar';
import MDScreenMenu from './../components/MDScreenMenu';

export default function Home() {
     return (
          <div className='w-screen relative bg-selected-dark px-4 lg:grid-cols-3 lg:grid text-selected-white lg:h-screen overflow-hidden'>
               <MDScreenMenu />
               <PersonCard />
               <Sections />
               <Navbar />
          </div>
     );
}
