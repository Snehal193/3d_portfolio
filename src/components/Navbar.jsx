import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // derive active link from current pathname so it persists on reload
    const path = location.pathname || '/';
    if (path === '/' || path === '') {
      setActive('');
      return;
    }
    // path may be like '/about' or '/craft/kinetic-carousel'
    const matched = navLinks.find((nav) => path.startsWith(`/${nav.id}`));
    if (matched) setActive(matched.title);
    else setActive('');
  }, [location]);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/'
          className='flex items-center gap-2'
          onClick={()=>{
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-12 h-12 object-contain'/>
        </Link>
        <ul className='list-none hidden sm:flex gap-10'>
          {navLinks.map((nav)=>(
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"}
                hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={`/${nav.id}`}> {nav.title} </Link>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 absolute black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col flex-1 gap-4'>
              {navLinks.map((nav)=>(
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"}
                    font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {setActive(nav.title);
                    setToggle(!toggle);
                  }}
                >
                  <Link to={`/${nav.id}`}> {nav.title} </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
       </div>
    </nav>
  )
}

export default Navbar