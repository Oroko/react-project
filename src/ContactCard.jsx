import React,{useState} from 'react'

import './style.css'

const ContactCard = (props) => {
  const [showAge, setShowAge] = useState(true);
  const handleClick =() => {
    setShowAge(!showAge)
  }
  return(
    <div className="contact-card">
      <img src={props.image} alt="profile"/>
    <div className="user-details">
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <button onClick = {handleClick}>Toggle Age</button>
      {showAge && <p>Age: {props.age}</p> }
    </div>
  </div>
  )
}

export default ContactCard