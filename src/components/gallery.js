import React from 'react';
import { Carousel } from '.'
import {gallery} from '../facilityData'

export default function Gallery() {
  return (
    <div className="room">
    <div className="room__info">
      <p className="room__text">5-bedroom and private facility with three (3) private rooms and one semi-private (2-beds) room.</p>
      <p className="room__text">Spacious living area for our clients to never feel resctricted.</p>
      <p className="room__text">Up to date kitchen with state of the art appliances.</p>
    </div>
    <Carousel slides={gallery} />
    </div>
  )
}