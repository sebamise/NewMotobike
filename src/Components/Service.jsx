import React from "react";
import "../Styles/Style.css";
import { Link } from "react-router-dom";

export function Service({ text, image }) {
  return (
    <div className="card mx-2 mb-4" style={{ width: "18rem" }}>
      <div className="zoom-container">
        <Link to="/Motobike" >
        <img src={image} className="card-img-top" alt="..." />
        </Link>
      </div>
      <div className="card-body" id="text-container">
        <p className="card-text">{text}</p>
        <section className="text-center">
          <Link to="/Motobike" >
           <button className="btn btn-primary" id="button">Mas Detalles</button> 
          </Link>
        </section>
      </div>
    </div>
  );
}

export function Welcome() {
  return (
    <div className="ContenedorWelcome">
      <section className="SeccionTitulo">
      <h2 className="Titulo">Bienvenido</h2>
      <p className="w-50 m-auto mt-3">
        Sed ut perspiciatis unde om nis natus error sit volup atem accusant
        dolorem que laudantium.perspiciatis unde om nis natus error sit volup
        atem accusant dolorem que laudantium. Totam aperiam, eaque ipsa quae ai.
      </p>
      </section>
    </div>
  );
}
