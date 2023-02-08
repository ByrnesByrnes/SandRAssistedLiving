import React, { useState } from 'react';
import { BsEnvelopeFill } from 'react-icons/bs'
import { NavLink as Link } from 'react-router-dom'
import { headerLinks } from '../headerLinks'
import { Modal, ContactForm, VisitorPolicy } from '../components'

export default function Footer() {
  const [showModal, setShowModal] = useState(false)


  return (
    <section className="footer">
      <div className="footer__logo">
        <img src="/imgs/SandRAssistedLiving_logo.png" alt="s and r logo" />
      </div>
      <div className="footer__socials">
        {/* <a href="#" target="_blank" className="footer__link">
          <AiFillInstagram className="footer__social" />
        </a> */}
        <div
          style={{ display: "inline-block" }}
        >
          <BsEnvelopeFill
            onClick={() => setShowModal(!showModal)}
            className="footer__social"
            aria-label="email"
            role="button"
          />
          <Modal content={<ContactForm setShowModal={setShowModal} />} showModal={showModal} setShowModal={setShowModal} />
        </div>


      </div>
      {headerLinks.map(item => (
        <Link
          key={item.id}
          onClick={() => window.scrollTo(0, 0)}
          to={item.to} className="footer__link">{item.title}</Link>
      ))}
      <a href="tel:+8135487289" className="footer__link">(813) 548-7289</a>
      <VisitorPolicy />
      <p className="footer__license">S&R Assisted Living Facility License No: AL13236.</p>
    </section>
  )
}