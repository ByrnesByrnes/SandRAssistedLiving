import React from 'react';
import { useParams } from 'react-router-dom'
import { services } from '../servicesData'
import { parseToUrl } from '../helpers/parseToUrl'

export default function Service() {

  const { id } = useParams()
  const service = services.find(item => parseToUrl(item.title) === id)


  return (
    <>
      <section className="service">
        <h1 className="service__title">Services</h1>
        <div className="service__content">
          <img src={service.img} alt={service.alt} className="service__image" />
          <div className="service__info">
            {service.info.map(item => (
              <p className="service__text">{item}</p>
            ))}

          </div>

        </div>
        <div className="service__details">
          <h2 className="service__subtitle">Details</h2>
          <ul className="service__list">
            {service.list.map(item => (
              <li className="service__list__option">{item}</li>
            ))}
          </ul>
        </div>
        <div className="service__extras">
          <div>
            <h3>Visitors</h3>
            <p className="about__text">Family members are allowed to have appointment free visiting anytime throughout the day.</p>
          </div>
          <div>
            <h3>Activities</h3>
            <p className="about__text">Daily social activities are provided monday through saturday six (6) days a week.</p>
          </div>
        </div>
      </section>

      <p
        style={{ textAlign: "center" }}
        className="service__text"
      >Are we missing something you require? Contact us to inquire so we can best help you.</p>
    </>
  )
}