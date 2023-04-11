import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

export default function Home() {
     return (
          <>
               <div className='intro-page flex flex-col h-screen'>
                    <Navbar />
                    <HeroSection />
               </div>
          </>
     );
}
