import React from 'react';
import ContactCard from './ContactCard';



const APP =() => {
  
  return(
    <div>
      <ContactCard image="https://via.placeholder.com/150" name="Abel Gechure" email="aoroko09@gmail.com" age={29}/>
      <ContactCard image="https://via.placeholder.com/150" name="Aella Cox-Oroko" email="aellaCO09@gmail.com" age={2}/>
      <ContactCard image="https://via.placeholder.com/150" name="Ziomara Cox-Oroko" email="zioCO09@gmail.com" age={2}/>

    </div>
  
  )
  
}

export default APP;