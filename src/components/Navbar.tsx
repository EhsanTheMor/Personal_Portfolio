import { IoPersonCircle } from 'react-icons/io5';
import { AiFillHome } from 'react-icons/ai';
import { IoMdSchool } from 'react-icons/io';
import { BsBriefcaseFill } from 'react-icons/bs';
import { HiPuzzle } from 'react-icons/hi';
import { FaEnvelope } from 'react-icons/fa';
import { useScrollContext } from './../context/context';

const Navbar = () => {
     const { active, setActive } = useScrollContext();

     const handleClick = (name: string) => {
          const el = document.getElementById(`${name}`);
          el?.scrollIntoView({
               behavior: 'smooth',
          });
          setActive(name);
     };

     return (
          <div className='absolute right-32 top-1/2 -translate-y-1/2 border-2 rounded-full border-selected-border px-4 py-6 text-xl text-selected-paragraph space-y-4 hidden lg:block'>
               <AiFillHome
                    onClick={() => handleClick('INTRODUCE')}
                    className={`nav-item ${
                         active === 'INTRODUCE'
                              ? 'text-selected-primary'
                              : 'text-selected-paragraph'
                    }`}
               />
               <IoPersonCircle
                    onClick={() => handleClick('ABOUT')}
                    className={`nav-item ${
                         active === 'ABOUT'
                              ? 'text-selected-primary'
                              : 'text-selected-paragraph'
                    }`}
               />
               <IoMdSchool
                    onClick={() => handleClick('EDUCATION')}
                    className={`nav-item ${
                         active === 'EDUCATION'
                              ? 'text-selected-primary'
                              : 'text-selected-paragraph'
                    }`}
               />
               <BsBriefcaseFill
                    onClick={() => handleClick('EXPERIENCES')}
                    className={`nav-item ${
                         active === 'EXPERIENCES'
                              ? 'text-selected-primary'
                              : 'text-selected-paragraph'
                    }`}
               />
               <HiPuzzle
                    onClick={() => handleClick('SKILLS')}
                    className={`nav-item ${
                         active === 'SKILLS'
                              ? 'text-selected-primary'
                              : 'text-selected-paragraph'
                    }`}
               />
               <FaEnvelope
                    onClick={() => handleClick('CONTACT')}
                    className={`nav-item ${
                         active === 'CONTACT'
                              ? 'text-selected-primary'
                              : 'text-selected-paragraph'
                    }`}
               />
          </div>
     );
};

export default Navbar;
