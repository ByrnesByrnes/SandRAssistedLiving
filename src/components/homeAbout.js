import React from 'react';
import { aboutData } from '../aboutData'
import { NavLink as Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'

export default function About() {
  return (
    <section className="home__about">
      <div>
        <h1 className="home__about__title">The S&R Philosophy</h1>
        <Link 
          onClick={() => window.scrollTo(0,0)}
          to={ROUTES.DIFFERENCE} className="button">our difference</Link>
      </div>
      <div className="home__about__content">
        {aboutData.map(item => (
          <div key={item.id} className="home__about__info">
            <h4 className="home__about__subtitle">{item.title}</h4>
            <p className="home__about__text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}