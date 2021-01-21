import React from 'react';
import { Staff } from '../components'
import { staffBios } from '../aboutData'
export default function About() {
  return (
    <section className="about">
      <h1 className="about__title">About Us</h1>
      <p className="about__text">"We strive to provide a safe, home-like environment with excellent quality care to the aging population."</p>
      {staffBios.map(staff => (
        <>
          <h2 className="about__staff">Meet</h2>
          <Staff staff={staff}/>
        </>
      ))}
    </section>
  )
}