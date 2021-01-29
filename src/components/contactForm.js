import React, { useState } from 'react';

const encode = data => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
}

export default function ContactForm({ setShowModal }) {
  const [success, setSuccess] = useState('')
  const [state, setState] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = event => {
    event.preventDefault();
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": event.target.getAttribute("name"), 
        ...state 
      })
    })
      .then(() => {
        setState({
          name: "",
          email: "",
          message: ""
        }) 
        setSuccess("Thank We will respond as Soon as Possible")
        const confirmation = setTimeout(() => {
          setShowModal && setShowModal(false)
          setSuccess('')
        }, 4000);
        return () => clearTimeout(confirmation)
      })
      .catch(error => setSuccess(error));
  }
  
  const handleChange = event => setState({...state,[event.target.name]: event.target.value})

  const {name, email, message} = state
  
  return (
    <form 
      className="contact__form" 
      onSubmit={handleSubmit} 
      name="contact" 
      method="post" 
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
    <input type="hidden" name="form-name" value="contact" />
    <h2 
      className={`contact__form ${success ? 'success' : 'confirm'}`}
    >{success}</h2>
      <h2>Send Message</h2>
      <div className="contact__form__inputBox">
      <input
        className="contact__form__input"
        required 
        type="text" 
        name="name" 
        value={name}
        onChange={handleChange}
      />
      <span className="contact__form__label">Your name</span>
      </div>
      <div className="contact__form__inputBox">

      <input 
        className="contact__form__input"
        required 
        type="email" 
        name="email" 
        
        value={email}
        onChange={handleChange}
      />
      <span 
      className="contact__form__label"
      style={
        email.length > 0 ? 
        {
          color: "#89abe3",
          transform: "translateY(-16px)",
          fontSize: "12px"
        }
        : null
      }
      >Your Email</span>
      </div>
      <div className="contact__form__inputBox">
      <textarea 
        className="contact__form__textarea"
        required 
        name="message" 
        value={message}
        onChange={handleChange}
      ></textarea>
      <span className="contact__form__label">Your message</span>
      </div>
      <button className="button" type="submit">Send</button>
    </form>
  )
}
