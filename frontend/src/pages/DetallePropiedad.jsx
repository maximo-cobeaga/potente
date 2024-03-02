import React, { useEffect, useState } from 'react'
import { DetallePropiedadXl } from './DetallePropiedadXl'
import { DetallePropiedadSm } from './DetallePropiedadSm'
import { Fragment } from 'react'
import Media from 'react-media';
import { obtenerPropiedades } from '../api/propiedadesAPI'
import { useParams } from 'react-router-dom'

export function DetallePropiedad() {
    const [propiedad, setPropiedad] = useState({})
    const params = useParams()

    useEffect(() => {
        async function cargarPropiedades() {
            const { data } = await obtenerPropiedades()
            const p = data.filter(p => p.id === parseInt(params.id))[0]
            setPropiedad(p)
        }
        cargarPropiedades()
    }, [])



    return (
        <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px)"
        }}>
            {matches => (
                <Fragment>
                    {matches.small && (<DetallePropiedadSm propiedad={propiedad} />)}
                    {matches.medium && (<DetallePropiedadXl propiedad={propiedad} />)}
                </Fragment>
            )}

        </Media>

        // <>
        //     <DetallePropiedadXl />
        //     <DetallePropiedadSm />
        // </>
    )

}
