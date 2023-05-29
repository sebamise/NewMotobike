import React from 'react'
import '../Styles/Style.css';
import { ImagenNosotros1, ImagenNosotros2 } from './Imagenes';

export default function Nosotros() {
  return (
    <div>
        <section className='SeccionTitulo mt-5'>
            <h2 className='Titulo'>Sobre Nosotros</h2>
        </section>
        <div className="card  mb-5 ms-md-5 ms-0" style={{maxWidth: "100%"}} >
  <div className="row g-0">
    <div className="col-md-6 col-12">
      <img src={ImagenNosotros1} className="img-fluid rounded-start h-100 w-100" alt="..."/>
    </div>
    <div className="col-md-6 col-12">
      <div className="card-body h-100">
        <h3 className="card-title">Su Titulo Aqui</h3>
        <p className="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, United States.</p>
        <a href="#" className="btn btn-primary" id="button">
            Mas Detalles
          </a>
      </div>
    </div>
  </div>
</div>

<div className="card  mb-5 ms-md-5 ms-0 " style={{maxWidth: "100%"}} >
  <div className="row g-0 flex-row-reverse">
    <div className="col-md-6 col-12">
      <img src={ImagenNosotros2} className="img-fluid rounded-start h-100" alt="..."/>
    </div>
    <div className="col-md-6 col-12">
      <div className="card-body h-100">
        <h3 className="card-title">Su Titulo Aqui</h3>
        <p className="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, United States.</p>
        <a href="#" className="btn btn-primary" id="button">
            Mas Detalles
          </a>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
