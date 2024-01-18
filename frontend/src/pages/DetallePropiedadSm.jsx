import React from 'react'
import { Navbar } from '../components/Navbar'
import Carousel from 'react-bootstrap/Carousel';


export function DetallePropiedadSm() {
    const api_key = 'AIzaSyAf9qdKYg8ab1l1ufJaWJoE7SMC4gwuVtk'
    const direccion = 'misiones 134, mar del plata, buenos aires'
    return (
        <>
            <Navbar />
            <section className='detalle-section-sm'>
                <div className="detalle-imagenes-sm">

                    <Carousel fade>
                        <Carousel.Item>
                            <img src="https://d1v2p1s05qqabi.cloudfront.net/7554638/1697649987.jpg" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="https://d1v2p1s05qqabi.cloudfront.net/7554638/1697649987.jpg" alt="" />
                        </Carousel.Item>
                    </Carousel>

                </div>
                <div className='detalle-body-sm'>
                    <h1>Propiedad en venta</h1>
                    <p className='ubicacion'>Direccion 123, Mar del Plata, Buenos Aires</p>
                    <p className='id'>Id: 23333</p>
                    <p className='descripcion'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, tenetur fugit voluptas quasi doloribus non reiciendis, pariatur architecto, quas laudantium expedita distinctio rerum corrupti molestias ipsum voluptatum! Voluptas, quos architecto.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nostrum consequatur iusto magnam, iste, voluptate in porro nulla libero mollitia blanditiis, quam exercitationem perferendis. Nesciunt cupiditate non in distinctio provident!
                    </p>
                    <div className='lista detalles'>
                        <h2>Detalles</h2>
                        <ul>
                            <li><span>Sup. Total: </span> 250m^2</li>
                            <li><span>Garajes: </span> 2</li>
                            <li><span>Baños: </span> 2</li>
                            <li><span>Orientacion: </span> Norte</li>
                            <li><span>Ambientes: </span> 2</li>
                            <li><span>Dormitorio: </span> 2</li>
                            <li><span>Situacion: </span> 2</li>
                        </ul>
                    </div>
                    <div className='lista servicios'>
                        <h2>Servicios</h2>
                        <ul>
                            <li>Agua Corriente</li>
                            <li>Desague cloacal</li>
                            <li>Gas natural</li>
                            <li>Luz</li>
                            <li>Cocheras</li>
                            <li>Agua caliente</li>
                        </ul>
                    </div>
                    <div className='lista comodidades'>
                        <h2>Comodidades</h2>
                        <ul>
                            <li>Camara de seguridad</li>
                            <li>laundry</li>
                            <li>parrilla</li>
                            <li>piscina</li>
                            <li>quincho</li>
                            <li>solarium</li>
                            <li>cochera fija cubierta</li>
                            <li>calefaccion</li>
                        </ul>
                    </div>
                    <div className='ubicacion-container'>
                        <h2>Ubicacion de la propiedad 22334</h2>
                        <iframe
                            width={'100%'}
                            height={450}
                            style={{ border: "0" }}
                            loading="lazy"
                            allowFullScreen
                            referrerpolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=${api_key}&q=${direccion.replaceAll(' ', '+')}`}>
                        </iframe>
                    </div>
                </div>
            </section>
        </>
    )
}