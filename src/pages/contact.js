import React from 'react';
import { ContactForm } from '../components';
import { GoLocation } from 'react-icons/go'
import { AiOutlinePhone } from 'react-icons/ai'
import { BiEnvelope } from 'react-icons/bi'
import * as ROUTES from "../constants/routes";
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
    <Helmet>
    <title>S and R Assisted Living: Contact</title>
    <meta
      name="description"
      content="If you have any question and want get in touch don't hesitate to contact us at sandrassistedliving@gmail.com"
    />
    <link rel="canonical" href={ROUTES.CONTACT} />
  </Helmet>
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
        <ContactForm />
      </div>
    </section>
    </>
  )
}
