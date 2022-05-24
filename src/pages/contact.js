import React, { useState } from 'react'

import {validateEmail } from '../utils/helpers';

export default function Contact() {
  const [email,setEmail]= useState('');
  
  function handleFormSubmit(e){
    e.preventDefault();
    
    if (!validateEmail(email)){
      // setErrorMessage('Email or username is invalid');
      alert('email invalid')
    }
  }
  return (
    <form onSubmit={handleFormSubmit}>
    <label htmlFor="name">Name:</label>
    <input type="text" name="name"/>
    <label htmlFor="email">Email:</label>
    <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <label htmlFor="message">Message:</label>
    <input type="text" name="message"/>

    <button type="submit"> Submit </button>
    </form>
  )

}

