import React from 'react';
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

export default function LearnMore(){
  return (
    <section className="learnMore">
    <div className="learnMore__info">
      <h1 className="learnMore__title">Want to Learn More?</h1>
      <Link 
        onClick={window.scrollTo(360,0)}
        to={ROUTES.CONTACT} className="button">Request more information</Link>
      <h2 className="learnMore__number">(813) 548-7289</h2>
    </div>
  </section>
  )
}