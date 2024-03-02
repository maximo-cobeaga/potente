import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { obtenerTipos } from '../api/propiedadesAPI'

export function Filtros() {
    //useStates
    const [tipos, setTipos] = useState([])

    //Router Navigate
    const Navigate = useNavigate()

    //Params Functions
    const [searchParams, setSearchParams] = useSearchParams()

    //Form Functions
    const { register, handleSubmit
    } = useForm()

    function onSubmitFunction(e) {
        setSearchParams({ busqueda: e.target.fbusqueda.value, tipo: e.target.ftipo.value, moneda: e.target.fmoneda.value, desde: e.target.fdesde.value, hasta: e.target.fhasta.value, dormitorios: e.target.fdormitorios.value, baños: e.target.fbaños.value })
    }

    useEffect(() => {
        async function cargarTipos() {
            const { data } = await obtenerTipos()
            setTipos(data)
        }
        cargarTipos()
    }, [])


    return (
        <section className='categorias-aside'>
            <form className='categorias-form' onSubmit={onSubmitFunction}>
                <input className='filtros-button' type="submit" value='Aplicar filtros' />
                <div className='division-form busqueda'>
                    <p className='title'>Palabra clave</p>
                    <input id='busque' {...register('fbusqueda')} className='inp-form inp-text' placeholder='Ingrese una palabra clave' type="text" />
                </div>
                <div className="division-form tipo">
                    <p className='title'>
                        Tipo de propiedad
                    </p>
                    <select {...register('ftipo')} className='inp-form'>
                        <option value="" disabled selected>Seleccione un tipo</option>
                        {tipos && tipos.map(t => <option value={t.id} key={t.id}>{t.tipo}</option>)}
                    </select>
                </div>
                <div className='division-form precio'>
                    <p className='title'>Precio</p>
                    <div className='precio'>
                        <select {...register('fmoneda')} className='inp-form'>
                            <option value="" disabled selected >Seleccione una moneda</option>
                            <option value="USD">USD</option>
                            <option value="ARS">ARS</option>
                        </select>
                        <input {...register('fdesde')} className='inp-form inp-text' type="number" placeholder='Desde' />
                        <input {...register('fhasta')} className='inp-form inp-text' type="number" placeholder='Hasta' />
                    </div>
                </div>
                <div className="division-form">
                    <p className='title'>Dormitorios</p>
                    <select {...register('fdormitorios')} className='inp-form'>
                        <option value="" disabled selected>Seleccione la cantidad</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                    </select>
                </div>
                <div className="division-form">
                    <p className='title'>Baños</p>
                    <select {...register('fbaños')} className='inp-form'>
                        <option value="" disabled selected>Seleccione la cantidad</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                    </select>
                </div>

            </form>
            <a href='/categoria/venta' className='filtros-link' >Limpiar filtros</a>
        </section>
    )
}
