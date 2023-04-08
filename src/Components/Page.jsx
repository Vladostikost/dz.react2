import React from 'react'
import { useState } from 'react'


const Page = () => {
    const [email, setEmail] = useState("")
    const [lastName, setLastName] = useState("")
    const [name, setName] = useState("вы успешно зарегистрировались")


   

  return (  

    <div className=''>
        <p className='block'></p>
        <p className='p'>   регистрация: {lastName}  </p>
        <div className="input">

            <input type="name" placeholder='First Name' />
            <h1></h1>
            <input type="lastName" placeholder='Last Name' />
            <h2></h2>
            <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder='Email' />
            <h3></h3>
            <button onClick={() => setLastName(lastName + name) } className='btn'>Register</button>
            
        </div>
       

    </div>
  )
}

export default Page
    
