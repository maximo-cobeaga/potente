import React, { useContext, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useParams } from 'react-router-dom'
import { PropiedadCatalogo } from '../components/PropiedadCatalogo'
import { Fragment } from 'react'
import Media from 'react-media';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { obtenerPropiedades } from '../api/propiedadesAPI'
import { Context } from '../Context'

export function Categoria() {
    const [propiedades, setPropiedades] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const params = useParams()
    console.log(params.cat)

    useEffect(() => {
        async function cargarPropiedades() {
            const { data } = await obtenerPropiedades()
            setPropiedades(data.filter(prop => prop.estado === 'En venta'))
        }
        cargarPropiedades()
    }, [])



    return (
        <>
            <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small &&
                            <>
                                <Navbar modal={show} />
                                <section className='categoria-container-sm'>
                                    <div className='categoria-filtros-sm'>
                                        <button onClick={handleShow} >Filtros</button>
                                        <form>
                                            <input className='input-t' type="text" placeholder='Palabras clave...' />
                                            <input className='input-b' type="button" value="Buscar" />
                                        </form>
                                    </div>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Filtros</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className='aside-lista-sm'>
                                                <p className='titulo-sm'>Ubicacion</p>
                                                <ul>
                                                    <li>Centro</li>
                                                    <li>chauvin</li>
                                                    <li>guemes</li>
                                                    <li>la perla</li>
                                                    <li>la perla norte</li>
                                                    <li>los troncos</li>
                                                    <li>playa chica</li>
                                                    <li>playa grande</li>
                                                    <li>plaza mitre</li>
                                                    <li>san carlos</li>
                                                </ul>
                                            </div>
                                            <hr />
                                            <form className="aside-precio-sm">
                                                <p className='titulo-sm'>Precio</p>
                                                <div>
                                                    <select>
                                                        <option value="usd">USD</option>
                                                        <option value="ars">ARS</option>
                                                    </select>
                                                    <input type="number" placeholder='Desde' />
                                                    <input type="number" placeholder='Hasta' />

                                                </div>
                                                <input className='button-submit' type="submit" />
                                            </form>
                                            <hr />
                                            <form className='aside-superficie-sm'>
                                                <p className='titulo-sm'>Superficie total</p>
                                                <div>
                                                    <div>
                                                        <label>Desde</label>
                                                        <input type="number" placeholder='Desde' />
                                                    </div>
                                                    <div>
                                                        <label>Hasta</label>
                                                        <input type="number" placeholder='Hasta' />
                                                    </div>
                                                </div>

                                            </form>
                                            <hr />
                                            <div className='aside-botones-sm'>
                                                <p className='titulo-sm'>Dormitorios</p>
                                                <div>
                                                    <button>0</button>
                                                    <button>1</button>
                                                    <button>2</button>
                                                    <button>3</button>
                                                    <button>4+</button>
                                                </div>

                                            </div>
                                            <hr />
                                            <div className='aside-botones-sm'>
                                                <p className='titulo-sm'>Baños</p>
                                                <div>
                                                    <button>0</button>
                                                    <button>1</button>
                                                    <button>2</button>
                                                    <button>3</button>
                                                    <button>4+</button>
                                                </div>

                                            </div>
                                            <hr />
                                            <div className='aside-lista-sm'>
                                                <p className='titulo-sm'>Antigüedad</p>
                                                <ul>
                                                    <li>En construccion</li>
                                                    <li>A estrenar</li>
                                                    <li>Hasta 5 años</li>
                                                    <li>Entre 5 y 10 años</li>
                                                    <li>Entre 10 y 20 años</li>
                                                    <li>Entre 20 y 50 años</li>
                                                </ul>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleClose}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <div className='categoria-catalogo-sm'>
                                        <PropiedadCatalogo />
                                        <PropiedadCatalogo />
                                        <PropiedadCatalogo />
                                        <PropiedadCatalogo />
                                        <PropiedadCatalogo />
                                        <PropiedadCatalogo />
                                        <PropiedadCatalogo />
                                    </div>
                                </section>
                                <Footer />
                            </>
                        }
                        {matches.medium &&
                            <>
                                <Navbar />
                                <section className='categorias-section'>
                                    <div className='categorias-container'>
                                        <aside className='categorias-aside'>
                                            <form className='aside-busqueda'>
                                                <label>Palabras Clave</label>
                                                <div>
                                                    <input type="text" />
                                                    <button type="submit">buscar</button>
                                                </div>


                                            </form>
                                            <hr />
                                            <div className='aside-lista'>
                                                <p>Ubicacion</p>
                                                <ul>
                                                    <li>Centro</li>
                                                    <li>chauvin</li>
                                                    <li>guemes</li>
                                                    <li>la perla</li>
                                                    <li>la perla norte</li>
                                                    <li>los troncos</li>
                                                    <li>playa chica</li>
                                                    <li>playa grande</li>
                                                    <li>plaza mitre</li>
                                                    <li>san carlos</li>
                                                </ul>
                                            </div>
                                            <hr />
                                            <form className="aside-precio">
                                                <p>Precio</p>
                                                <div>
                                                    <select>
                                                        <option value="usd">USD</option>
                                                        <option value="ars">ARS</option>
                                                    </select>
                                                    <input type="number" placeholder='Desde' />
                                                    <input type="number" placeholder='Hasta' />

                                                </div>
                                                <input className='button-submit' type="submit" />
                                            </form>
                                            <hr />
                                            <form className='aside-superficie'>
                                                <p>Superficie total</p>
                                                <div>
                                                    <div>
                                                        <label>Desde</label>
                                                        <input type="number" placeholder='Desde' />
                                                    </div>
                                                    <div>
                                                        <label>Hasta</label>
                                                        <input type="number" placeholder='Hasta' />
                                                    </div>
                                                </div>

                                            </form>
                                            <hr />
                                            <div className='aside-botones'>
                                                <p>Dormitorios</p>
                                                <div>
                                                    <button>0</button>
                                                    <button>1</button>
                                                    <button>2</button>
                                                    <button>3</button>
                                                    <button>4+</button>
                                                </div>

                                            </div>
                                            <hr />
                                            <div className='aside-botones'>
                                                <p>Baños</p>
                                                <div>
                                                    <button>0</button>
                                                    <button>1</button>
                                                    <button>2</button>
                                                    <button>3</button>
                                                    <button>4+</button>
                                                </div>

                                            </div>
                                            <hr />
                                            <div className='aside-lista'>
                                                <p>Antigüedad</p>
                                                <ul>
                                                    <li>En construccion</li>
                                                    <li>A estrenar</li>
                                                    <li>Hasta 5 años</li>
                                                    <li>Entre 5 y 10 años</li>
                                                    <li>Entre 10 y 20 años</li>
                                                    <li>Entre 20 y 50 años</li>
                                                </ul>
                                            </div>
                                        </aside>
                                        <div className='categorias-catalogo'>
                                            {propiedades.map(p => <PropiedadCatalogo key={p.id} propiedad={p} />)}
                                        </div>
                                    </div>
                                </section>
                                <Footer />
                            </>
                        }
                    </Fragment>
                )}
            </Media>




        </>
    )
}
