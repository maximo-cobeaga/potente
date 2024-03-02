import React, { useContext, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useParams, useSearchParams } from 'react-router-dom'
import { PropiedadCatalogo } from '../components/PropiedadCatalogo'
import { Fragment } from 'react'
import Media from 'react-media';
import { useState } from 'react';
import { obtenerPropiedades, obtenerTipos } from '../api/propiedadesAPI'
import { useForm } from 'react-hook-form'
import { FiltroSm } from '../components/FiltroSm'
import { Filtros } from '../components/Filtros'


export function Categoria() {
    const [propiedades, setPropiedades] = useState([])
    const [tipos, setTipos] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const params = useParams()
    const { register, handleSubmit } = useForm()


    //Parametros de busqueda por filtro usando querys
    const [searchParams, setSearchParams] = useSearchParams()
    const busqueda = searchParams.get('fbusqueda')
    const tipo = searchParams.get('ftipo')
    const moneda = searchParams.get('fmoneda')
    const desde = searchParams.get('fdesde')
    const hasta = searchParams.get('fhasta')
    const dormitorios = searchParams.get('fdormitorios')
    const baños = searchParams.get('fbaños')

    //Funcion de filtrado


    useEffect(() => {
        async function cargarPropiedades() {
            const { data } = await obtenerPropiedades()
            let resultado

            if (params.cat === 'venta') {
                resultado = data.filter(prop => prop.estado === 'En venta')
                if (busqueda !== '' && busqueda !== null) {
                    resultado = resultado.filter(p => p.descripcion.toLowerCase().includes(busqueda.toLowerCase()))
                }
                if (tipo !== '' && tipo !== null) {
                    resultado = resultado.filter(p => p.tipo_propiedad === parseInt(tipo))
                }
                if (moneda !== '' && moneda !== null) {
                    resultado = resultado.filter(p => p.moneda.toLowerCase() === moneda.toLowerCase())
                }
                if (desde !== '' && desde !== null) {
                    resultado = resultado.filter(p => p.precio >= parseInt(desde))
                }
                if (hasta !== '' && hasta !== null) {
                    resultado = resultado.filter(p => p.precio <= parseInt(hasta))
                }
                if (dormitorios !== '' && dormitorios !== null) {
                    resultado = resultado.filter(p => p.dormitorios >= parseInt(dormitorios))
                }
                if (baños !== '' && baños !== null) {
                    resultado = resultado.filter(p => p.precio >= parseInt(baños))
                }

            } else if (params.cat === 'alquiler') {
                resultado = data.filter(prop => prop.estado === 'En alquiler')
                if (busqueda !== '' && busqueda !== null) {
                    resultado = resultado.filter(p => p.descripcion.toLowerCase().includes(busqueda.toLowerCase()))
                }
                if (tipo !== '' && tipo !== null) {
                    resultado = resultado.filter(p => p.tipo_propiedad === parseInt(tipo))
                }
                if (moneda !== '' && moneda !== null) {
                    resultado = resultado.filter(p => p.moneda.toLowerCase() === moneda.toLowerCase())
                }
                if (desde !== '' && desde !== null) {
                    resultado = resultado.filter(p => p.precio >= parseInt(desde))
                }
                if (hasta !== '' && hasta !== null) {
                    resultado = resultado.filter(p => p.precio <= parseInt(hasta))
                }
                if (dormitorios !== '' && dormitorios !== null) {
                    resultado = resultado.filter(p => p.dormitorios >= parseInt(dormitorios))
                }
                if (baños !== '' && baños !== null) {
                    resultado = resultado.filter(p => p.precio >= parseInt(baños))
                }
            } else if (params.cat === 'temporal') {
                resultado = data.filter(prop => prop.estado === 'En alquiler temporal')
                if (busqueda !== '' && busqueda !== null) {
                    resultado = resultado.filter(p => p.descripcion.toLowerCase().includes(busqueda.toLowerCase()))
                }
                if (tipo !== '' && tipo !== null) {
                    resultado = resultado.filter(p => p.tipo_propiedad === parseInt(tipo))
                }
                if (moneda !== '' && moneda !== null) {
                    resultado = resultado.filter(p => p.moneda.toLowerCase() === moneda.toLowerCase())
                }
                if (desde !== '' && desde !== null) {
                    resultado = resultado.filter(p => p.precio >= parseInt(desde))
                }
                if (hasta !== '' && hasta !== null) {
                    resultado = resultado.filter(p => p.precio <= parseInt(hasta))
                }
                if (dormitorios !== '' && dormitorios !== null) {
                    resultado = resultado.filter(p => p.dormitorios >= parseInt(dormitorios))
                }
                if (baños !== '' && baños !== null) {
                    resultado = resultado.filter(p => p.precio >= parseInt(baños))
                }
            }
            setPropiedades(resultado)

        }
        async function cargarTipos() {
            const { data } = await obtenerTipos()
            setTipos(data)
        }

        cargarPropiedades()
        cargarTipos()
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
                            <FiltroSm propiedades={propiedades} />
                        }
                        {matches.medium &&
                            <>
                                <Navbar />
                                <section className='categorias-section'>

                                    <div className='categorias-container'>
                                        <Filtros />
                                        <div className='categorias-catalogo'>
                                            {propiedades.map(p =>
                                                <PropiedadCatalogo key={p.id} propiedad={p} />)}
                                            {propiedades.length === 0 &&
                                                (<div className='non-propiedades'>
                                                    <h1>No se encontraron propiedades con esas caracteristicas</h1>
                                                    <a href="/">Haz click aqui para volver al incio</a>
                                                </div>)
                                            }
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
