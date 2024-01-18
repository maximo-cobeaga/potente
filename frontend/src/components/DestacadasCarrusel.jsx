import React, { useEffect, useState } from 'react'
import { PropDestacada } from '../components/PropDestacada'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

export function DestacadasCarrusel({ cant }) {
    const [cantidad, setCantidad] = useState(3)
    useEffect(() => {
        setCantidad(cant)
    }, [cant])

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={cantidad}
            navigation
            loop={true}
            pagination={{ clickable: true }}
        >
            <SwiperSlide><PropDestacada /></SwiperSlide>
            <SwiperSlide><PropDestacada /></SwiperSlide>
            <SwiperSlide><PropDestacada /></SwiperSlide>
            <SwiperSlide><PropDestacada /></SwiperSlide>
        </Swiper>
    )
}
