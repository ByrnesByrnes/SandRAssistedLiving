import React from 'react';
import { useParams } from 'react-router-dom'
import { services } from '../servicesData'
import { parseToUrl } from '../helpers/parseToUrl'

export default function Service() {

  const { id } = useParams()
  const service = services.find(item => parseToUrl(item.title) === id )


  return (
    <section className="service">
      <h2>{service.title}</h2>
    </section>
  )
}