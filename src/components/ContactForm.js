import React, { useState } from 'react';

export default function ContactForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = event => {
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeURI({"form-name": "contact", ...state})
    })
    .then(() => console.log("success"))
    .catch(error => console.error(error))
    
    event.preventDefault()
    
  }
  
  const handleChange = event => setState({...state,[event.target.name]: event.target.value})

  const {name, email, message} = state

  return (
    <form className="contact__form" name="contact" onSubmit={handleSubmit}>
      <input 
        required 
        type="text" 
        name="name" 
        placeholder="Your name"
        value={name}
        onChange={handleChange}
      />
      <input 
        required 
        type="email" 
        name="email" 
        placeholder="Your email"
        value={email}
        onChange={handleChange}
      />
      <textarea 
        required 
        name="message" 
        placeholder="Your message"
        value={message}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}