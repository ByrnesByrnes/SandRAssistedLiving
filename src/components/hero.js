import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__info">
        <h1 className="hero__title">Caring for Seniors at home</h1>
        <p className="hero__text">Finding the best home care service provider can be overwhelming, but you've come to the right place. Learn more about our services and what might be right for you.</p>
       
          <a className="button" href="tel:+8135487289">Give Us a Call</a>
        
      </div>

      <div className="hero__image">
        {/* should be a Portrait */}
        <img src="/imgs/stock/raychan.jpg" alt="lady in wheelchair being walked by female lady"/>
      </div>
    </section>
  )
}