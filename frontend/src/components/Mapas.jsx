import React, { useEffect, useState } from 'react'
import { Map, Marker } from 'pigeon-maps'

export function Mapas({ coordenadas }) {
    const [coor, setCoor] = useState(coordenadas)
    useEffect(() => {
        console.log(coor)
    }, [])

    return (
        (coor != [] && (
            <Map
                width={500}
                height={300} defaultCenter={coor} defaultZoom={17}>
                <Marker width={40} anchor={coor} />
            </Map>))

    )

}
