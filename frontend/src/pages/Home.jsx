import React from 'react'
import { Banner } from '../components/Banner'
import { Navbar } from '../components/Navbar'
import { Destacadas } from '../components/Destacadas'
import { BarrioDestacado } from '../components/BarrioDestacado'
import { ExperienciaPo } from '../components/ExperienciaPo'
import { Footer } from '../components/Footer'
export function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Destacadas />
            <BarrioDestacado />
            <ExperienciaPo />
            <Footer background={'bg-grey'} />
        </div>
    )
}
