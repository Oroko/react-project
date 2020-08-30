import React,{useState} from 'react'

import './style.css'

const ContactCard = () => {
  const [showAge, setShowAge] = useState(true);
  const handleClick =() => {
    setShowAge(!showAge)
  }
  return(
    <div className="contact-card">
      <img src="https://via.placeholder.com/150" alt="profile"/>
    <div className="user-details">
      <p>Name: Abel Gechure</p>
      <p>Email: aroko09@gmail.com</p>
      <button onClick = {handleClick}>Toggle Age</button>
      {showAge && <p>Age: 29</p> }
    </div>
  </div>
  )
}

export default ContactCard