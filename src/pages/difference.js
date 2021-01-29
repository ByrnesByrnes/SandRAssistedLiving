import React from 'react';
import { Quote } from '../components'

export default function Difference() {
  return (
    <section className="difference">
      <h1 className="difference__title">Our Goal</h1>
      <Quote quote="To make a positive recognizable difference to the lives of senior citizens, through the provision of long-term assisted living." />


      <div className="difference__content">
      <div className="difference__image">
          <img src="/imgs/stock/caregiver.jpg" alt="caregiver holder elderly person's hand" />
        </div>

        <div className="difference__info">
          <p className="difference__text">Your loved ones can rest assured that you will be recieving quality care in a loving and safe environment.</p>
          <h2 className="difference__subtitle">How?</h2>
          <ul className="difference__list">
            <li className="difference__list__option">
              <p className="difference__text">We look at all aspects of care not just from the physical, but also the mental and emotional view.</p>
              <p className="difference__text">Treating our residents as friends and family can help one cope with the adversities of needing support.</p>
              
            </li>
          </ul>
        </div>

   
      </div>
    </section>
  )
}