import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { FormularioContacto } from '../components/FormularioContacto'

export function Contacto() {
    return (
        <>
            <Navbar />
            <section className='contacto-section'>
                <h1>Contáctenos</h1>
                <div className='contacto-oficinas'>
                    <div className='contacto-oficina'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.3532790647137!2d-57.56272292409984!3d-38.01554274559707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584debd9891f537%3A0x97a1645a3e81c384!2sPotente%20Propiedades!5e0!3m2!1ses!2sar!4v1700833374182!5m2!1ses!2sar"
                            height={500} style={{ border: "0" }} allowFullScreen />
                        <p className='ofc-titulo'>Córdoba 3719</p>
                        <ul className='ofc-descripcion'>
                            <li>Mar del Plata, Buenos Aires</li>
                            <li>info@potenteprop.com.ar</li>
                            <li>2234727416 | 2235129032</li>
                        </ul>
                        <FormularioContacto oficina={'Cordoba 3719'} />
                        <hr />

                    </div>

                    <div className="contacto-oficina">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.2306584861717!2d-57.55008502409716!3d-38.06500904843892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584ddf8c7236311%3A0x5cc554e9c1e63d00!2sPotente%20Propiedades!5e0!3m2!1ses!2sar!4v1700833529036!5m2!1ses!2sar" height={500} style={{ border: "0" }} allowFullScreen  ></iframe>
                        <p className='ofc-titulo'>Av. de los Trabajadores 2439</p>
                        <ul className='ofc-descripcion'>
                            <li>Mar del Plata, Buenos Aires</li>
                            <li>potentemogotes@pimas.com.ar</li>
                            <li>2234840619 | 2235851198</li>

                        </ul>
                        <FormularioContacto oficina={'Av. de los Trabajadores 2439'} />
                        <hr />
                    </div>
                </div>

            </section>

            <Footer background={'bg-grey'} />
        </>
    )
}
