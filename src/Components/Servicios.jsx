import React from "react";
import "../Styles/Style.css";
export default function Servicios() {
  return (
    <div className="ContenedorServicios">
      <section className="SeccionTitulo mt-5">
        <h2 className="Titulo">Servicios</h2>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <section>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-checklist"
                width="68"
                height="68"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
                <path d="M14 19l2 2l4 -4" />
                <path d="M9 8h4" />
                <path d="M9 12h2" />
              </svg>
              <h3>Consigue Resultados</h3>
              <p>Sed ut perspiciatis unde om nis natus error sit volup atem accusant dolorem que laudantium.</p>
            </section>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <section>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-manual-gearbox"
                width="68"
                height="68"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M12 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 8l0 8" />
                <path d="M12 8l0 8" />
                <path d="M19 8v2a2 2 0 0 1 -2 2h-12" />
              </svg>
              <h3>Alta tecnologia</h3>
              <p>Sed ut perspiciatis unde om nis natus error sit volup atem accusant dolorem que laudantium.</p>
            </section>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <section>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-trophy"
                width="68"
                height="68"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 21l8 0" />
                <path d="M12 17l0 4" />
                <path d="M7 4l10 0" />
                <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              </svg>
              <h3>Creando Ganadores</h3>
              <p>Sed ut perspiciatis unde om nis natus error sit volup atem accusant dolorem que laudantium.</p>
            </section>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <section>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-flame"
                width="68"
                height="68"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
              </svg>
              <h3>Alta Performance</h3>
              <p>Sed ut perspiciatis unde om nis natus error sit volup atem accusant dolorem que laudantium.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
