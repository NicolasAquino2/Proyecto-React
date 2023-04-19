import React, { useState } from 'react'
import '../ContactForm/ContactForm.css'

const ContactForm = ({onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

const handlerSubmit = (event) =>{
    event.preventDefault()
    const userData = {
        name, phone, email
    }
    onConfirm(userData)
}

  return (
    <div className='form'>
      <form onSubmit={handlerSubmit}>
      <div className="mb-3">
    <label className="form-label">Nombre y apellido</label>
    <input value={name} onChange={(e) => setName (e.target.value)} type="nombre y apellido" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Correo Electronico</label>
    <input value={phone} onChange={(e) => setPhone (e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
 </div>
 <div className="mb-3">
    <label  className="form-label">Telefono</label>
    <input  value={email} onChange={(e) => setEmail (e.target.value)} type="telefono" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit' "className="orden">generar orden</button>

</form>
    </div>
  )
}

export default ContactForm
