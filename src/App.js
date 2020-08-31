import React from 'react';
import ContactCard from './ContactCard';



const APP =() => {
  
  const contacts = [
    {name: "Abel Gechure", email: "aoroko09@gmail.com", age: 29},
    {name: "Abel Gechure", email: "aoroko09@gmail.com", age: 29},
    {name: "Abel Gechure", email: "aoroko09@gmail.com", age: 29},
  ]
    
  
  return(
    <div>
      {contacts.map((contact)=>{
        return(
          <ContactCard 
            avatar="https://via.placeholder.com/150"
            name={contact.name}
            email={contact.email}
            age={contact.age}

          />
        )
      })}
    </div>
  
  )
  
}

export default APP;