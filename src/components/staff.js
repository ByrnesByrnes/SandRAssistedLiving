import React from 'react';

export default function Staff({ staff }) {

  return (
    <div className="staff">
      <h1 className="staff__title">{staff.title}</h1>
      <p className="staff__role">{staff.role}</p>
      <div className="staff__content">
        <div className="staff__image">
          <img src={staff.image} alt="" />
        </div>

        <div className="staff__info">
          <h4 className="staff__subtitle">My Background</h4>
          {staff.bio.map(info => (
            <p className="staff__text">{info}</p>
          ))}
        </div>
        <div className="staff__info">
          <h4 className="staff__subtitle">Something Else here</h4>
          {staff.bio.map(info => (
            <p className="staff__text">{info}</p>
          ))}
        </div>

      </div>
    </div>
  )
}