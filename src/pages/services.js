import React from 'react';
import { services } from '../servicesData'
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom'
import { parseToUrl } from '../helpers/parseToUrl'

export default function Services() {
  return (
    <></>
    // <>
    // <section className="services">
    //   <div className="services__hero">
    //     <div className="services__info">
    //       <h1 className="services__title">Our Services</h1>
    //       <p className="services__text">With S&R, seniors get a dedicated staff member who is there to manage all their needs. We also offer other services you can add whenever you need to.</p>
    //       <a href="tel:+8135487289" className="services button">Schedule a call</a>
    //     </div>
    //     <div className="services__hero__image">
    //       <img src="/imgs/stock/adult-arms.jpg" alt="holding elderly hands in seat" />
    //     </div>
    //   </div>
    // </section>
    // a quote here?
    // <section className="services__content">
    //   {services.map(service => (
    //     <div className="services__service">
    //         <div className="services__service__image">
    //           <img src={service.img} alt={service.alt} />
    //         </div>
    //         <h2 className="services__service__subtitle">{service.title}</h2>
    //         <p className="services__service__text"></p>
    //         <ul className="services__service__options">
    //           {/* {service.list.slice(0,3).map(item => (
    //             <li className="services__service__options__option">{item}</li>
    //           ))} */}
    //         </ul>
    //         <Link to={`${ROUTES.SERVICES}/${parseToUrl(service.title)}`} className="services__service__learnMore">learn more</Link>
    //       </div>
    //   ))}
    // </section>

    // </>
  )
}