import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h5>Información de contacto</h5>
            <p>Correo electrónico: info@example.com</p>
            <p>Studio / Moonshine St. 14/05 Light City</p>
            <p>Copyright 20xx - Html5 Templates by Zerotheme</p>
            <p>Teléfono: +123456789</p>
          </div>
          <div className="col-md-6">
            <h5>Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-decoration-none">
                  INICIO
                </Link>
              </li>
              <li>
                <Link to="/Motobike" className="text-decoration-none">
                  MOTOBIKE
                </Link>
              </li>
              <li>
                <Link to="/Contacto" className="text-decoration-none">
                  CONTACTO
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-center py-2">
        <p className="mb-0">
          Sebastian Misetich. - <Link to="/MyPage" className="text-decoration-none text-light">Enlace a mi Pagina Personal</Link> 
        </p>
      </div>
    </footer>
  );
}
