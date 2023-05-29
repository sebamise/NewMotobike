import { React, useEffect, useState } from "react";

import { articles } from "../Components/ArticlesMin";

import { Link } from "react-router-dom";
import "../Styles/Style.css";
import Sidebar from "../Components/Sidebar";
export default function Motobike() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <section className="Portada">
        <h2 className="text-light">Motobike</h2>
        <span className="text-light">
          Use the form below to get in touch with us. Share your specific
          requirements and we'll be happy to reply back shortly. You are also
          welcome to contact us via phone, emial or at our office during working
          hours.
        </span>
      </section>

      <div className="container">
        <div className="row flex-row-reverse">
          {windowWidth >= 1366 && (
            <div className="col-md-4">
              <Sidebar />
            </div>
          )}
          <div className={windowWidth >= 1366 ? "col-md-8" : "col-md-12"}>
            {articles.map((article, index) => (
              <div className="article" key={index}>
                <h2>{article.title}</h2>
                <p>
                  <strong>Fecha de publicación:</strong> {article.date}
                </p>
                <div className="row">
                  <div className="col-md-4">
                  
                <img src={article.img} alt="Miniatura" className="w-100" />
              
                    
                  </div>
                  <div className="col-md-8">
                    <p>{article.content}</p>
                    <Link to={`/articulo/${article.id}`}>
                      <button className="btn">Leer más</button>
                    </Link>
                    <hr />
                  </div>
                </div>
              </div>
            ))}
            {windowWidth >= 1366 && articles.length > 0 && (
              <div className="pb-5"></div>
            )}
          </div>
          {windowWidth < 1366 && (
            <div className="col-md-12">
              <Sidebar className="mt-5 pb-5" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
