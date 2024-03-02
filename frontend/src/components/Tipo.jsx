import React from 'react'

export function Tipo({ tipo }) {
    return (
        <a href={`/categoria/venta?tipo=${tipo.id}`} className="barrio-des">
            <img className='barrio-image' src={tipo.imagen} alt={tipo.tipo} />
            <div className='barrio-body'>
                <p>{tipo.tipo}</p>
            </div>
        </a>
    )
}