import React from 'react';
import { services } from '../servicesData'

export default function Services() {
  return (
    <section className="services">
      <div className="services__image">
        <img src="/imgs/stock/damir-bosnjak.jpg" alt="older lady sitting and posing"/>
      </div>
      <div className="services__provide">
        <h1 className="services__title">What we provide</h1>
        <p className="services__text">We provide each member with a personalized plan tailored to their everyday needs.</p>
      </div>

      {/* Loop this with a Map function after */}
      {services.map(service => (
        <div className="services__service">
          <div className="services__image">
            <img src={service.img} alt={service.alt}/>
          </div>
          <h2 className="services__subtitle">{service.title}</h2>
          <p className="services__text">{service.text}</p>
        </div>
      ))}
    </section>
  )
}