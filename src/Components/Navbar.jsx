import React from "react";
import "../Styles/Style.css";
import logo from "../Media/Logo.png";
import { Routes, Route, Link } from "react-router-dom";
import Contacto from "../Templates/Contacto";
import Motobike from "../Templates/Motobike";
import Home from "../Templates/Home";
import { Articulo } from "../Templates/Articulo";
import MyPage from "../Templates/MyPage";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link to="/" style={{ textDecoration: 'none' }}>
        <img src={logo} alt="Logo" style={{ width: "200px" }} />
      </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-link active" aria-current="page">
                HOME
              </Link>

              <Link to="/motobike" className="nav-link">
                MOTOBIKE
              </Link>
              <Link to="/contacto" className="nav-link">
                CONTACTO
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Motobike" element={<Motobike/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="/articulo/:id" element={<Articulo/>}/>
        <Route path="/MyPage" element={ <MyPage/> }/>
      </Routes>

    
    </>

  );
}
