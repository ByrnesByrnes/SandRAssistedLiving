import React from 'react';
import { Staff, Quote } from '../components'
import { staffBios } from '../aboutData'
export default function About() {
  return (
    <section className="about">
      <h1 className="about__title">About Us</h1>
      <p className="about__text">S&R Assisted Living is a privately owned senior group home that provides housing, hospitality services and personal care services for adults who can no longer live independently or require varying support. At S&R Assisted Living residents are provided with their choice of private or semi-private rooms ( On availability ) furnished. Residents maintain a great deal of independence and privacy while being supported with services.</p>
      <p className="about__text">We offer everything seniors need to ensure they stay happy and healthy as they age. Every resident is able to live life on their own terms in a safe and secure home atmosphere.</p>

      <Quote quote="We strive to provide a safe, home-like environment with excellent quality care to the aging population."/>
      {staffBios.map(staff => (
        <>
          <h2 className="about__staff">Meet</h2>
          <Staff staff={staff}/>
        </>
      ))}
    </section>
  )
}