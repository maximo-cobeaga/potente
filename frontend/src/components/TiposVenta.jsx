import React, { useEffect, useState } from 'react'
import { Tipo } from './Tipo'
import { obtenerTipos } from '../api/propiedadesAPI'

export function TiposVenta() {
    const [tiposPropiedades, setTiposPropiedades] = useState([])

    useEffect(() => {
        const cargarTipos = async () => {
            const { data } = await obtenerTipos()
            setTiposPropiedades(data)
        }
        cargarTipos()
    }, [])



    return (
        <section className='barrios-section'>
            <h2>Tipos de propiedades</h2>
            <div className="barrios-contaiener">
                {tiposPropiedades.map(t => <Tipo key={t.id} tipo={t} />)}
            </div>
        </section>
    )
}
