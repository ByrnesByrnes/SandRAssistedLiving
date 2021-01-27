import React from 'react';

export default function Location() {
  return (
    <div className="location">
    <div className="location__info">
      <h2 className="location__subtitle">Our Location</h2>
      <p className="location__text">907 Woodland Terrace</p>
      <p className="location__text">Brandon, Florida</p>
      <p className="location__text">33511</p>
    </div>

      <iframe
        className="location__googleMaps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.9104183172144!2d-82.27245058457285!3d27.93539138269793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2cdb1eddd7e69%3A0xb179055ab8efc894!2s907%20Woodland%20Terrace%2C%20Brandon%2C%20FL%2033511%2C%20USA!5e0!3m2!1sen!2sca!4v1611100234441!5m2!1sen!2sca"
        title="SandR Google map Location"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"></iframe>
    </div>
  )
}