import React from "react";
import Logo from '../Media/Logo.png'
import '../Styles/Style.css';
export default function Noticias() {
  return (
    <div>
      <div className="container">
        <div className="row p-5">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 border-start border-1 border-dark" >
            <h3 className="text-warning fw-bold">Bienvenido a nuestro sitio</h3>
            <p>LOREM IPSUM DOLOR SIT AMET, CONSEC TEER ADIPISCING. PRSENT VESTIBULUM.</p>
            <img src={Logo} alt="Logo" className="img-fluid"/>
            <p className="text-muted">His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix. Et vel quod legimus, graeci electram ocurreret at his.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 border-start border-1 border-dark">
            <h3 className="text-warning fw-bold">Ayuda y Soporte</h3>
            <p>LOREM IPSUM DOLOR SIT AMET, CONSEC TEER ADIPISCING. PRSENT VESTIBULUM.</p>
            <span className="text-muted">His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix. Et vel quod legimus, graeci electram ocurreret at his.</span>
            <ul className="mt-3">
                <li className="text-warning">ASETY KSCABO</li>
                <li className="text-warning">NERAFAES</li>
                <li className="text-warning">KERTYU ERSVITA ERTYA</li>
                <li className="text-warning">SNEMO LASEC VASP</li>
                <li className="text-warning">TAIADES GOERTAYSE</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 border-start border-1 border-dark">
            <h3 className="text-warning fw-bold">Ultimas Noticias</h3>
            <h6>LOREM IPSUM DOLOR SIT AMET</h6>
            <span className="text-muted">His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix.</span>
            <hr />
            <h6>LOREM IPSUM DOLOR SIT AMET</h6>
            <span className="text-muted">His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix.</span>
            <hr />
            <h6>LOREM IPSUM DOLOR SIT AMET</h6>
            <span className="text-muted">His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
