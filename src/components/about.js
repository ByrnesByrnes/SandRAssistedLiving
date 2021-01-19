import React from 'react';
import { aboutData } from '../aboutData'

export default function About() {
  return (
    <section className="about">
      <div>
        <h1 className="about__title">The S&R Philosophy</h1>
        <button className="button"> out difference</button>
      </div>
      {aboutData.map(item => (
        <div className="about__info">
          <h4 className="about__subtitle">{item.title}</h4>
          <p className="about__text">{item.text}</p>
        </div>
      ))}

    </section>
  )
}