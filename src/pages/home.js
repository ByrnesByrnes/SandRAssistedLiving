import React from 'react';
import {
  Header,
  Hero,
  Services,
  About,
  Footer,
  Contact,
  ContactForm
} from '../components'
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
      
      <ContactForm />
    </>
  )
}