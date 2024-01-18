import React from 'react'
import banner from '../assets/banner.webp'
import { useForm } from 'react-hook-form'

export function Banner() {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='banner-container'>
            <img src={banner} alt="Imagen de mar del plata" />
            <div className='banner-body'>
                <h2>Encontra tu departamento en Mar del Plata</h2>
                <p>Especialistas en unidades nuevas y seminuevas</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='texto' placeholder='Ubicacion, codigo o palabras clave...' type="text" {...register('clave')} />
                    <input className='button-inp' type="submit" value='Buscar' />
                </form>
            </div>
        </div>
    )
}
