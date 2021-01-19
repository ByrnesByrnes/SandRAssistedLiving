import React, { useState, useRef, useEffect } from 'react';


const UseClickOutside = handler => {
  let navRef = useRef()

  useEffect(()=> {
    const checkHandler = event => {
      if(!navRef.current.contains(event.target)) {
        handler(false)
      }
    }
    document.addEventListener('mousedown', checkHandler)
    
    return () => document.removeEventListener('mousedown', checkHandler)
  },[])

  return navRef
}


export default function Header() {
  const [toggle, setToggle] = useState(false)



  
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
              <a href="#" className="nav__links">Home</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__links">About</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__links">Contact</a>
            </li>
          </ul>
        </nav>
        <div
          className="header__hamburger"
          onClick={() => setToggle(!toggle)}
        >
          <div className={`header__hamburger__line`}></div>
        </div>
      </div>
    </header>
  )
}


