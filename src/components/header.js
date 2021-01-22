import React, { useState, useRef, useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import HeaderLinks, { headerLinks } from '../headerLinks'

const UseClickOutside = handler => {
  let navRef = useRef()

  useEffect(() => {
    const checkHandler = event => {
      if (!navRef.current.contains(event.target)) {
        handler(false)
      }
    }
    document.addEventListener('mousedown', checkHandler)

    return () => document.removeEventListener('mousedown', checkHandler)
  }, [handler])

  return navRef
}


export default function Header() {
  const [toggle, setToggle] = useState(false)

  const stopScroll = document.body.classList

  const handleToggle = () => {
    setToggle(!toggle)

    stopScroll.toggle('noScroll')
    
    console.log('fired')
  }

  const navRef = UseClickOutside(() => {
    setToggle(false)
    console.log('outside!')
    stopScroll.remove('noScroll')
  })

  return (
    <header className={`header ${toggle ? 'open' : ''}`}>

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
              onClick={() =>{window.scrollTo(0,0); setToggle(false)}}
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


