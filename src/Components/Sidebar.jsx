import React from 'react'

export default function Sidebar() {

    const windowWidth = window.innerWidth;
    
  return (
    <div className="sidebar">
      <section className={windowWidth < 1366 ? "" : "pt-5"}>
        <h2 className="text-warning">Meta</h2>
        <ul className="mt-3">
          <li className="text-warning">ASETY KSCABO</li>
          <li className="text-warning">NERAFAES</li>
          <li className="text-warning">KERTYU ERSVITA ERTYA</li>
          <li className="text-warning">SNEMO LASEC VASP</li>
          <li className="text-warning">TAIADES GOERTAYSE</li>
        </ul>
      </section>
      <section>
        <h2 className="text-warning">Dato de la semana</h2>
        <p className="text-muted">
          Six-month sales at BMW brand rose 8 percent to 804,000 cars,
          expanding the lead over runner-up Audi to 24,000 from 11,000 after
          five months. Half-year sales at Audi and Mercedes rose 6 percent
          each to 780,500 and 694,000 respectively.
        </p>
      </section>
      <section className="pt-5">
        <h2 className="text-warning">Post Recientes</h2>
        <ul className="mt-3">
          <li className="text-warning">Dodge Charger, F-250 popular with car theives</li>
          <li className="text-warning">Dodge Charger, F-250 popular with car theives</li>
          <li className="text-warning">Dodge Charger, F-250 popular with car theives</li>
          <li className="text-warning">Dodge Charger, F-250 popular with car theives</li>
        </ul>
      </section>
    </div>
  )
}
