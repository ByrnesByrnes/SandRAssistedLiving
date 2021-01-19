import React from 'react';
import { AiFillInstagram } from 'react-icons/ai'
import { BsEnvelopeFill } from 'react-icons/bs'

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
      
      <a href="#" className="footer__link">Our Services</a>
      <a href="#" className="footer__link">Our Difference</a>
     
      <a href="tel:+8135487289" className="footer__link">(813) 548-7289</a>
      <p className="footer__license">S&R Assisted Living Facility License No: AL13236.</p>
    </section>
  )
}