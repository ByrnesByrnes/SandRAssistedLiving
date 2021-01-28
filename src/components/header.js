import React, { useState, useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom'
import { MdKeyboardArrowUp } from 'react-icons/md'
import * as ROUTES from '../constants/routes'
import { headerLinks } from '../headerLinks'
import { UseClickOutside } from '../hooks/useClickOutside'
import { BackToTop } from '../hooks/backToTop'

export default function Header() {
  const [toggle, setToggle] = useState(false)
  
  const stopScroll = document.body.classList

  const handleToggle = () => {
    setToggle(!toggle)
    stopScroll.toggle('noScroll')
  }

  //When scrollY greater then 200 back to scroll Icon appears Bottom Right
  const  showScroll  = BackToTop()

  const navRef = UseClickOutside(() => {
    setToggle(false)
    stopScroll.remove('noScroll')
  })

  return (
    <header className={`header ${toggle ? 'open' : ''}`}>
      <div 
        onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth'})}
         className={`header__scrollTop ${showScroll ?  'show' : ''}`}><MdKeyboardArrowUp /></div>
      <div className="overlay"></div>

      <div className="header__navigation" ref={navRef}>
        <a href="/" className="header__logo">
          <img className="header__logo__image" src="/imgs/SandR-logo.png" alt="Logo" />
        </a>

        <nav className="nav">
          <ul className="nav__list">
          {headerLinks.map(navLink => (
            <li  
              key={navLink.id} 
              className="nav__item"
              onClick={() =>{window.scrollTo(0,0); setToggle(false); stopScroll.remove('noScroll')}}
            >
              <Link to={navLink.to} className="nav__links">{navLink.title}</Link>
            </li>
          ))}
          </ul>
        </nav>
        <div
          className="header__hamburger"
          onClick={handleToggle}
        >
          <div className={`header__hamburger__line`}></div>
        </div>
      </div>
    </header>
  )
}


