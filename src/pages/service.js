import React from 'react';
import { useParams } from 'react-router-dom'
import { services } from '../servicesData'
import { parseToUrl } from '../helpers/parseToUrl'

export default function Service() {

  const { id } = useParams()
  const service = services.find(item => parseToUrl(item.title) === id )


  return (
    <section className="service">
      <h2 className="service__title">{service.title}</h2>
      <img src={service.img} alt="" className="service__title"/>
      {service.info.map(item => (
        <p className="service__text">{item}</p>
      ))}
      <h2 className="service__subtitle">Details</h2>
      <ul className="service__list">
      {service.list.map(item => (
        <li className="service__list__option">{item}</li>
      ))}
      </ul>
      <p 
        style={{textAlign: "center"}}
        className="service__text"
      >Are we missing something you require? Contact us to inquire so we can best help you.</p>
    </section>
  )
}