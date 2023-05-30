import React from 'react'
import '../Styles/Style.css'
import Form from '../Components/Form'
export default function Contacto() {
  return (
    <div>
      <section className="Portada">
        <h2 className="text-light">Contacto</h2>
        <span className="text-light">
          Use the form below to get in touch with us. Share your specific
          requirements and we'll be happy to reply back shortly. You are also
          welcome to contact us via phone, email or at our office during working
          hours.
        </span>
      </section>

      <Form/>
    </div>
  )
}
