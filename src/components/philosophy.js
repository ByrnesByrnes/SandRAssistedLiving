import React from 'react';
import { aboutData } from '../aboutData'
import { NavLink as Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'

export default function Philosophy() {
  return (
    <section className="philosophy">
      <div>
        <h1 className="philosophy__title">The S&R Philosophy</h1>
        <Link 
          onClick={() => window.scrollTo(0,0)}
          to={ROUTES.DIFFERENCE} className="button">our difference</Link>
      </div>
      <div className="philosophy__content">
        {aboutData.map(item => (
          <div key={item.id} className="philosophy__info">
            <h4 className="philosophy__subtitle">{item.title}</h4>
            <p className="philosophy__text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}