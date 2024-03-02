import React, { lazy } from 'react'
import { Mapas } from './Mapas'

export function ExperienciaPo() {
    return (
        <section className='exp-section'>
            <h2>Nuestras Oficinas</h2>

            <div className='exp-container'>
                <div className="exp">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.3532790647137!2d-57.56272292409984!3d-38.01554274559707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584debd9891f537%3A0x97a1645a3e81c384!2sPotente%20Propiedades!5e0!3m2!1ses!2sar!4v1700833374182!5m2!1ses!2sar"
                        height={350} style={{ border: "0" }} allowFullScreen />
                    <p className='exp-titulo'>Córdoba 3719</p>
                    <ul className='exp-description'>
                        <li>Mar del Plata, Buenos Aires</li>
                        <li>info@potenteprop.com.ar</li>
                        <ul>
                            <li>2234727416</li>
                            |
                            <li>2235129032</li>
                        </ul>
                        <hr />
                    </ul>
                </div>
                <div className="exp">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.2306584861717!2d-57.55008502409716!3d-38.06500904843892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584ddf8c7236311%3A0x5cc554e9c1e63d00!2sPotente%20Propiedades!5e0!3m2!1ses!2sar!4v1700833529036!5m2!1ses!2sar" height={350} style={{ border: "0" }} allowFullScreen  ></iframe>
                    <p className='exp-titulo'>Av. de los Trabajadores 2439</p>
                    <ul className='exp-description'>
                        <li>Mar del Plata, Buenos Aires</li>
                        <li>potentemogotes@pimas.com.ar</li>
                        <ul>
                            <li>2234840619</li>
                            |
                            <li>2235851198</li>
                        </ul>
                        <hr />

                    </ul>
                </div>

            </div>
        </section>
    )
}
