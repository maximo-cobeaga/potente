import React, { useEffect, useState, useContext } from 'react'
import { PropDestacada } from '../components/PropDestacada'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Context } from '../Context'
import { obtenerPropiedades } from '../api/propiedadesAPI'


export function DestacadasCarrusel({ cant }) {
    const [cantidad, setCantidad] = useState(3)
    const [propiedades, setPropiedades] = useState([])

    useEffect(() => {
        setCantidad(cant)
        const cargarPropiedades = async () => {
            const { data } = await obtenerPropiedades()
            setPropiedades(data.filter(p => p.destacar))
        }
        cargarPropiedades()

    }, [cant])

    return (
        <Swiper
            style={{ margin: '0 auto' }}
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={cantidad}
            navigation
            loop={true}
            pagination={{ clickable: true }}
        >
            {propiedades.map(propiedad => (
                <SwiperSlide className='swipper-slide-contain' key={propiedad.id}><PropDestacada propiedad={propiedad} /></SwiperSlide>
            ))}

        </Swiper>
    )
}
