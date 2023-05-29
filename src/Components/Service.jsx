import React from "react";
import "../Styles/Style.css";

export function Service({ text, image }) {
  return (
    <div className="card mx-2 mb-4" style={{ width: "18rem" }}>
      <div className="zoom-container">
        <img src={image} className="card-img-top" alt="..." />
      </div>
      <div className="card-body" id="text-container">
        <p className="card-text">{text}</p>
        <section className="text-center">
          <a href="#" className="btn btn-primary" id="button">
            Mas Detalles
          </a>
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
