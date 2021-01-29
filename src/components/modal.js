import React from 'react';
import { UseClickOutside } from '../hooks/useClickOutside'

export default function Modal({ content, showModal, setShowModal }) {

  const modalRef = UseClickOutside(() => {
    setShowModal(false)
  }, showModal)

  // const test = window.scrollY
  // const noScroll = document.body.style
  // console.log(window.scrollY, 'scrollY')


  
  
  // noScroll.top = showModal ? `-${test}px` : ''
  // noScroll.position = showModal ? 'fixed' : ''


  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div
        ref={modalRef}
        className={`modal__content `}>{content}</div>
    </div>
  )
}