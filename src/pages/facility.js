import React from 'react';
import { Gallery, Location } from '../components'

export default function Facility() {
  return (
    <section className="facility">
      <h1 className="facility__title">Our Facility</h1>
      <div className="facility__image">
        <img src="/imgs/facility/house-front-view.jpg" alt="front view of facility" />
      </div>
      <p className="facility__text">S&R is clean, spacious, comfortable and relaxing.</p>
      <p className="facility__text">We provide 24 hour assistance</p>

      <Gallery />
      <Location />
    </section>
  )
}