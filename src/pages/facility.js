import React from 'react';

export default function Facility() {
  return (
    <section className="facility">
      <h1 className="facility__title">Our Facility</h1>
      <div className="facility__image">
        <img src="/imgs/facility/house-front-view.jpg" alt="front view of facility" />
      </div>
      <p className="facility__text">S&R is clean, spacious, comfortable and relaxing. We provide 24 hour assistance, 3 meals a day (with snacks in between) and a caring staff.</p>
      <p className="facility__text">5-bedroom and private facility with three (3) private rooms and one semi-private (2-beds) room.</p>
      <p className="facility__text">spacious living area for our clients to never feel restricted.</p>
      <p className="facility__text">Up to date kitchen with state of the art appliances.</p>
      <div className="facility__location">
        <h2 className="facility__location__subtitle">Our Location</h2>
        <p className="facility__location__text">907 Woodland Terrace</p>
        <p className="facility__location__text">Brandon, Florida</p>
        <p className="facility__location__text">33511</p>

        <iframe
          className="facility__googleMaps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.9104183172144!2d-82.27245058457285!3d27.93539138269793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2cdb1eddd7e69%3A0xb179055ab8efc894!2s907%20Woodland%20Terrace%2C%20Brandon%2C%20FL%2033511%2C%20USA!5e0!3m2!1sen!2sca!4v1611100234441!5m2!1sen!2sca"
          title="SandR Google map Location"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"></iframe>
      </div>
    </section>
  )
}