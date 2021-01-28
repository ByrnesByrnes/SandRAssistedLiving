import React from 'react';
import { AiFillInstagram } from 'react-icons/ai'
import { BsEnvelopeFill } from 'react-icons/bs'
import { NavLink as Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { headerLinks } from '../headerLinks'
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
      {headerLinks.map(item => (
        <Link 
          onClick={() => window.scrollTo(0,0)} 
          to={item.to} className="footer__link">{item.title}</Link>
      ))}
      <a href="tel:+8135487289" className="footer__link">(813) 548-7289</a>
      <p className="footer__license">S&R Assisted Living Facility License No: AL13236.</p>
    </section>
  )
}