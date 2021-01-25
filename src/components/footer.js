import React from 'react';
import { AiFillInstagram } from 'react-icons/ai'
import { BsEnvelopeFill } from 'react-icons/bs'
import { NavLink as Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__logo">
        <img src="/imgs/SandRAssistedLiving_logo.png" alt=""/>
      </div>
      <div className="footer__socials">
        <a href="#" className="footer__link">
          <AiFillInstagram />

        </a>
        <a href="#" className="footer__link">
          <BsEnvelopeFill />
        </a>

      </div>
      
      <Link onClick={() => window.scrollTo(0,0)} to={ROUTES.SERVICES} className="footer__link">Our Services</Link>
      <Link onClick={() => window.scrollTo(0,0)} to={ROUTES.ABOUT} className="footer__link">About Us</Link>
      <Link onClick={() => window.scrollTo(0,0)} to={ROUTES.ABOUT} className="footer__link">Our Difference</Link>
      <Link onClick={() => window.scrollTo(0,0)} to={ROUTES.FACILITY} className="footer__link">Our Facility</Link>
     
      <a href="tel:+8135487289" className="footer__link">(813) 548-7289</a>
      <p className="footer__license">S&R Assisted Living Facility License No: AL13236.</p>
    </section>
  )
}