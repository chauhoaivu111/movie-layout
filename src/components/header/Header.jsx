import React, { useEffect, useRef } from "react";

import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/tmovie.png";

import "./Header.scss";

const Header = () => {
  const HeaderNavbar = [
    {
      display: "Home",
      path: "/",
    },

    {
      display: "Movies",
      path: "/Movie",
    },

    {
      display: "Tv Show",
      path: "/TV",
    },
  ];

//   set classname active

  const {pathname} = useLocation();
  const active = HeaderNavbar.findIndex(e =>e.path === pathname)

// custom scroll header
const headerRef = useRef(null);

useEffect(() => {
    const shrinkHeader = () => {
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop >100){
            headerRef.current.classList.add('shrink')

        }
        else{
            headerRef.current.classList.remove('shrink')
        }
    }
    // run if scroll 100 and return remove when scrollTop
    window.addEventListener('scroll',shrinkHeader)

    return () => {
        window.removeEventListener('scroll',shrinkHeader)
    }
},[])



  return (

    // declare headerRef
      
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="" />
          <Link to="/"> HDmovies</Link>
        </div>

        <div className="header__wrap__second">
          <ul className="header__wrap__second__navbar">
            {HeaderNavbar.map((item, i) => (
              <li key={i} className={`${ i=== active ? 'active' : ''}`}>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}

            <p className="header__wrap__second__navbar__secondelement"><Link to = '/Login'><i class='bx bx-user' style={{fontSize:"3rem",cursor:"pointer"}}></i></Link></p>
          </ul>

          
        </div>
      </div>
    </div>
  );
};

export default Header;
