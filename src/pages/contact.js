import React from 'react';
import { ContactForm } from '../components';
import { GoLocation } from 'react-icons/go'
import { AiOutlinePhone } from 'react-icons/ai'
import { BiEnvelope } from 'react-icons/bi'

export default function Contact() {
  return (
    <section className="contact">
    <div className="contact__content">
      <h1 className="contact__title">Contact Us</h1>
      <p>If you have any question and want get in touch don't hesitate to contact us</p>
    </div>
      <div className="contact__info">

        <div>
          <div className="contact__box">
            <GoLocation />
            <div className="contact__detail">
              <h3 className="contact__subtitle">Address</h3>
              <span>907 Woodland Terrace</span>
              <span>Brandon, Florida</span>
              <span>33511</span>
            </div>
          </div>
          <div className="contact__box">
            <AiOutlinePhone />
            <div className="contact__detail">
              <h3 className="contact__subtitle">Phone</h3>
              <span>(813) 548-7289</span>
            </div>
          </div>
          <div className="contact__box">
            <BiEnvelope />
            <div className="contact__detail">
              <h3 className="contact__subtitle">Email</h3>
              <span>sandrassistedliving@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="contact__frame">
          <ContactForm />
        </div>

      </div>
    </section>
  )
}
