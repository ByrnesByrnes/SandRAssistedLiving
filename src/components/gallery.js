import React from 'react';
import { Carousel } from '.'
import {gallery} from '../facilityData'

export default function Gallery() {
  return (
    <section className="gallery">
    <div className="gallery__info">
      <p className="gallery__text">5-bedroom and private facility with three (3) private rooms and one semi-private (2-beds) room.</p>
      <p className="gallery__text">Spacious living area for our clients to never feel resctricted.</p>
      <p className="gallery__text">Up to date kitchen with state of the art appliances.</p>
    </div>
    <Carousel slides={gallery} />
    </section>
  )
}