import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import Carousel from 'react-bootstrap/Carousel';
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'

export function DetallePropiedadXl() {
    const api_key = 'AIzaSyAf9qdKYg8ab1l1ufJaWJoE7SMC4gwuVtk'
    const direccion = 'misiones 134, mar del plata, buenos aires'
    const [fix, setFix] = useState(false)

    function setFixedSidebar() {
        if (window.scrollY >= 700) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixedSidebar)

    return (
        <>
            <Navbar />
            <section className="detalle-section">
                <div className="detalle-imagenes">

                    <Carousel fade>
                        <Carousel.Item>
                            <img src="https://d1v2p1s05qqabi.cloudfront.net/7554638/1697649987.jpg" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="https://d1v2p1s05qqabi.cloudfront.net/7554638/1697649987.jpg" alt="" />
                        </Carousel.Item>
                    </Carousel>

                </div>
                <div className="detalle-content">
                    <div className="detalle-body">
                        <h2>Titulo de propiedad</h2>
                        <p className='detalle-direccion'>Direccion de la propiedad</p>
                        <p>Id: 2233</p>
                        <p className="detalle-descripcion">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus ullam culpa consectetur corporis expedita asperiores voluptatum fuga vel porro, distinctio at sed aperiam vero, totam ab, temporibus doloribus eius?


                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus ullam culpa consectetur corporis expedita asperiores voluptatum fuga vel porro, distinctio at sed aperiam vero, totam ab, temporibus doloribus eius?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus ullam culpa consectetur corporis expedita asperiores voluptatum fuga vel porro, distinctio at sed aperiam vero, totam ab, temporibus doloribus eius?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus ullam culpa consectetur corporis expedita asperiores voluptatum fuga vel porro, distinctio at sed aperiam vero, totam ab, temporibus doloribus eius?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus ullam culpa consectetur corporis expedita asperiores voluptatum fuga vel porro, distinctio at sed aperiam vero, totam ab, temporibus doloribus eius?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus ullam culpa consectetur corporis expedita asperiores voluptatum fuga vel porro, distinctio at sed aperiam vero, totam ab, temporibus doloribus eius?
                        </p>
                        <div className="detalle-detalles descrip-sec">
                            <hr />
                            <h3>Detalles</h3>
                            <ul>
                                <li><span>Sup. Total:</span> 250m^2</li>
                                <li><span>garages:</span> 2</li>
                                <li><span>Baños:</span> 2</li>
                                <li><span>orientacion:</span> 2</li>
                                <li><span>ambientes:</span> 2</li>
                                <li><span>dormitorio:</span> 2</li>
                                <li><span>situacion:</span> 2</li>
                            </ul>
                        </div>
                        <div className="detalle-servicios descrip-sec">
                            <hr />
                            <h3>Servicios</h3>
                            <ul>
                                <li>Agua Corriente</li>
                                <li>Desague cloacal</li>
                                <li>gas natural</li>
                                <li>luz</li>
                                <li>cocheras</li>
                                <li>agua caliente</li>
                            </ul>
                        </div>
                        <div className="detalle-comodidades descrip-sec">
                            <hr />
                            <h3>Comodidades</h3>
                            <ul>
                                <li>camaras de seguridad</li>
                                <li>laundry</li>
                                <li>parrilla</li>
                                <li>piscina</li>
                                <li>quincho</li>
                                <li>solarium</li>
                                <li>cochera fija cubierta</li>
                                <li>calefaccion</li>
                            </ul>
                        </div>
                        <div className="detalle-ubicacion">
                            <hr />
                            <h3>Ubicacion</h3>
                            <p>Ubicacion 2233, Mar del Plata, Buenos Aires</p>
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

                    <div className='detalle-aside'>
                        <section className={fix ? 'sidebar-fixed' : ''}>
                            <div className="precio">
                                <p className='titulo'>Precio de Venta</p>
                                <p className='monto'>USD 889.000</p>
                                <p>Expensas: $250000</p>
                            </div>
                            <div className="contacto">
                                <p className="titulo">Oficina de Cordoba</p>
                                <ul>
                                    <li><img src={email} alt="" />oficina@gmail.com</li>
                                    <li><img src={phone} alt="" />  2233344455</li>
                                </ul>
                                <button >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                                    Escribir por WhatsApp
                                </button>
                            </div>
                        </section>

                    </div>
                </div>
            </section>
        </>
    )
}
