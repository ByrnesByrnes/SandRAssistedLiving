import React, {useState, useEffect} from 'react';

export const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false)
  useEffect(() => {
    const handleShow = () => {
      const showing = window.scrollY > 200 && true
      setShowScroll(showing)
    }
    document.addEventListener('scroll', handleShow)
    return () => document.removeEventListener('scroll', handleShow)
  },[])

  return showScroll
}