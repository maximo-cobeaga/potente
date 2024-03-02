import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { obtenerTipos } from '../api/propiedadesAPI'
import { PropiedadCatalogo } from './PropiedadCatalogo'
import { Filtros } from './Filtros'

export function FiltroSm({ propiedades }) {
    const [show, setShow] = useState(false);
    const [tipos, setTipos] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        async function cargarTipos() {
            const { data } = obtenerTipos()
            setTipos(data)
        }
        cargarTipos()
    }, [])


    return (
        <>
            <Navbar modal={show} />
            <section className='categoria-container-sm'>
                <div className='categoria-filtros-sm'>
                    <button onClick={handleShow} >Busqueda con filtros</button>

                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Filtros</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <section className='modal-sm'>
                            <Filtros />
                        </section>
                    </Modal.Body>
                </Modal>
                <div className='categoria-catalogo-sm'>
                    {propiedades && propiedades.map(p => <PropiedadCatalogo key={p.id} propiedad={p} />)}
                    {propiedades.length === 0 && (<div className='non-propiedades'>
                        <h1>No se encontraron propiedades con esas caracteristicas</h1>
                        <a href="/">Haz click aqui para volver al incio</a>
                    </div>)}
                </div>
            </section>
            <Footer background={'bg-grey'} />
        </>
    )
}