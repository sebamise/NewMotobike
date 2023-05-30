import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="container">
      <div className="row">
      {!isSubmitted ? (
    <form onSubmit={handleSubmit(onSubmit)} className='col-md-6 col-12 mt-2'>
        <legend className='text-warning fw-bold'>Contact Form</legend>
      <div className="mb-3">
        <input
          type="text"
          id="name"
          placeholder='Name'
          className="form-control"
          {...register('name', { required: true, minLength: 4, maxLength: 10 })}
        />
        {errors.name && errors.name.type === 'required' && (
          <div className="text-danger">El nombre es obligatorio</div>
        )}
        {errors.name && errors.name.type === 'minLength' && (
          <div className="text-danger">El nombre debe tener al menos 4 caracteres</div>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <div className="text-danger">El nombre debe tener como máximo 10 caracteres</div>
        )}
      </div>

      <div className="mb-3">
        <input
          type="email"
          id="email"
          placeholder='Your Email'
          className="form-control"
          {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
        />
        {errors.email && <div className="text-danger">El correo electrónico no es válido</div>}
      </div>

      <div className="mb-3">
        <textarea
          id="message"
          className="form-control"
          placeholder='Your Message'
          {...register('message', { minLength: 50, maxLength: 200 })}
        />
        {errors.message && errors.message.type === 'minLength' && (
          <div className="text-danger">El mensaje debe tener al menos 50 caracteres</div>
        )}
        {errors.message && errors.message.type === 'maxLength' && (
          <div className="text-danger">El mensaje no puede superar los 200 caracteres</div>
        )}
      </div>
      <section className='text-center mb-2'>
      <button type="submit" className="btn btn-light border border-dark fs-5" style={{
          transform: 'rotate(0deg) scale(1.003) skew(-14deg) translate(0)'
        }}>Submit</button>
        </section>
    </form>
    ) : (
        <section className="col-md-6 col-12">
          <h2 className="text-warning">Formulario enviado con éxito</h2>
          <p>Gracias por contactarnos!</p>
        </section>
      )}

    <section className="col-md-6 col-12">
        <h2 className='text-warning'>Contact Info</h2>
        <h6>SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOREMQUE.</h6>
        <p className='text-muted'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque la udantium, totam rem aperiam, eaque ipsa quae ab illo inventore quasi. Nemo enim ipsam voluptatem quia.</p>
        <ul className='text-muted list-unstyled'>
            <li>JL.Kemacetan timur no.23. block.Q3</li>
            <li>Jakarta-Indonesia</li>
            <li>+6221 888 888 90</li>
            <li>+6221 888 88891</li>
            <li>info@yourdomain.com</li>
        </ul>
    </section>
    </div>
    </div>
  );
};

export default Form;
