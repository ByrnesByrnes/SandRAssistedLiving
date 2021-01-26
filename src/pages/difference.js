import React from 'react';
import { Quote } from '../components'

export default function Difference() {
  return (
    <section className="difference">
      <h1 className="difference__title">Our Goal</h1>
      <Quote quote="To make a positive recognizable difference to the lives of senior citizens, through the provision of long-term assisted living." />
      <div className="difference__image">
        <img src="/imgs/stock/caregiver.jpg" alt="caregiver holder elderly person's hand"/>
      </div>
      <p className="difference__text">Your loved ones can rest assured that you will be recieving quality care in a loving and safe environment.</p>
      
      {/* <h2 className="difference__subtitle">We create Relationships,</h2>
      <p className="difference__text">not transactions</p> */}
      <h2 className="difference__subtitle">How?</h2>
      
    </section>
  )
}