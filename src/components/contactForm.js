import React, { useState } from 'react';

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
}

export default function ContactForm() {
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
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    
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
