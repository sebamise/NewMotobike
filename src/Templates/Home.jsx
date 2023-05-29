import React from 'react'
import Slider from '../Components/Slider'
import { Service, Welcome } from '../Components/Service'
import Nosotros from '../Components/Nosotros'
import Servicios from '../Components/Servicios'
import Noticias from '../Components/Noticias'

import image from "../Media/Section1.jpg";
import image2 from "../Media/Section2.jpg";
import image3 from "../Media/Section3.jpg";

export default function Home() {
  return (
    <div>
        <Slider/>
        <section className="d-flex flex-wrap justify-content-evenly mt-5">
      <Service text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, United States."} image={image}/>
      <Service text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, United States."} image={image2}/>
      <Service text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, United States."} image={image3}/>
      </section>
      <Welcome/>
      <Nosotros/>
      <Servicios/>
      <Noticias/>
      
    </div>
  )
}
