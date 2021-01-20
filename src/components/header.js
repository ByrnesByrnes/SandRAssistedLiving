import React, { useState, useRef, useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'


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

  document.body.style.overflow = toggle ? 'hidden' : 'visible'

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const navRef = UseClickOutside(() => {
    setToggle(false)
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
            <li className="nav__item">
              <Link to={ROUTES.HOME} className="nav__links">Services</Link>
            </li>
            <li className="nav__item">
              <Link to={ROUTES.HOME} className="nav__links">About Us</Link>
            </li>
            <li className="nav__item">
              <Link 
                onClick={() => {
                  setToggle(false)
                  window.scrollTo(0,0)
                }}
                to={ROUTES.FACILITY} className="nav__links">Our Residence</Link>
            </li>
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


