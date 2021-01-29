import React from 'react';
import { Gallery, Location } from '../components'

export default function Facility() {
  return (
    <>
      <section className="facility">
        <h1 className="facility__title">Our Facility</h1>
        <div className="facility__info">
          <div className="facility__image">
            <img src="/imgs/facility/house-front-view.jpg" alt="front view of facility" />
          </div>
          <p className="facility__text">S&R Assisted Living is an affordable family-like residence in a cozy bongalo, tucked away in a quiet residential neighborhood in Brandon Florida. A perfect solution for anyone who enjoys that home feel, but also requires assistance in everyday needs.</p>
        </div>

      </section>
      <Gallery />
      <Location />
    </>

  )
}