import React from 'react';
import { Staff } from '../components'
import { staffBios } from '../aboutData'
export default function About() {
  return (
    <section className="about">
      <h1 className="about__title">About Us</h1>
      <p>S & R Assisted Living Facility will have one staff member who will assist residents with their everyday activities. There will be a minimum of one awake staff member on the day shift according to patients need (7:00 am to 3:00 pm), one staff member on the evening shift (3:00 pm to 11:00 pm), and one staff member on the night shift (11:00 pm to 7:00 am).</p>
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