import React from 'react';
import { aboutData } from '../aboutData'
import { NavLink as Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'

export default function About() {
  return (
    <section className="home__about">
      <div>
        <h1 className="home__about__title">The S&R Philosophy</h1>
        {/* <p 
        style={{ 
          color: "black", 
          fontWeight: "700",
          fontSize: "1.4rem",
          textAlign: "center"
        }}
        className="home__about__text">
        Everyone's needs are different and we pride ourselves on giving you the care and attention that you deserve.
        </p> */}
        <Link to={ROUTES.DIFFERENCE} className="button">our difference</Link>
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