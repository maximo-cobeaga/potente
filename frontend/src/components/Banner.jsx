import React, { useState } from 'react'
import banner from '../assets/banner.webp'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

export function Banner() {
    const [busqueda, setBusqueda] = useState('')

    return (
        <div className='banner-container'>
            <img src={banner} alt="Imagen de mar del plata" />
            <div className='banner-body'>
                <h2>Encontrá tu propiedad en Mar del Plata</h2>
                <form >
                    <input className='texto' placeholder='Ubicación, codigo o palabras clave...' type="text" onChange={e => setBusqueda(e.target.value)} />
                    <a className='button-inp' href={`/categoria/venta?busqueda=${busqueda}`}>Buscar</a>
                </form>
            </div>
        </div>
    )
}
