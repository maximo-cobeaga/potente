import React from 'react'
import logo from '../assets/logo.webp'

export function Footer({ background }) {
    return (
        <footer className={`footer-container ${background == 'bg-grey' && 'bg-grey'}`}>
            <div className="footer-section">
                <h5>Quiénes somos?</h5>
                <img src={logo} alt="logo" />
            </div>
            <div className="footer-section">
                <h5>Contacténos</h5>
                <div className="footer-contactanos">
                    <div className="footer-contactanos__oficina">
                        <p className="titulo">Córdoba 3719</p>
                        <ul>
                            <li>Mar del Plata, Buenos Aires</li>
                            <li>info@potenteprop.com.ar</li>
                            <ul>
                                <li>2234727416</li>
                                |
                                <li>2235129032</li>
                            </ul>
                        </ul>
                    </div>
                    <div className="footer-contactanos__oficina">
                        <p className="titulo">Av. de los Trabajadores 2439</p>
                        <ul>
                            <li>Mar del Plata, Buenos Aires</li>
                            <li>potentemogotes@pimas.com.ar</li>
                            <ul>
                                <li>2234840619</li>
                                |
                                <li>2235851198</li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-section">
                <h5>Categorías</h5>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Ventas</a></li>
                    <li><a href="/">Alquiler</a></li>
                    <li><a href="/">Alquiler Temporal</a></li>
                    <li><a href="/">Contacto</a></li>
                </ul>
            </div>
        </footer>
    )
}
