import React from 'react'
import { Barrio } from './Barrio'

export function BarrioDestacado() {
    return (
        <section className='barrios-section'>
            <h2>Tipos en Venta</h2>
            <div className="barrios-contaiener">
                <Barrio />
                <Barrio />
                <Barrio />
                <Barrio />
                <Barrio />
                <Barrio />
            </div>
        </section>
    )
}
