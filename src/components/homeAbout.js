import React from 'react';
import { aboutData } from '../aboutData'

export default function About() {
  return (
    <section className="home__about">
      <div>
        <h1 className="home__about__title">The S&R Philosophy</h1>
        <button className="button"> our difference</button>
      </div>
      {aboutData.map(item => (
        <div key={item.id} className="home__about__info">
          <h4 className="home__about__subtitle">{item.title}</h4>
          <p className="home__about__text">{item.text}</p>
        </div>
      ))}
    </section>
  )
}