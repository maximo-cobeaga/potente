import React from 'react'

export function CordobaSm({ propiedad }) {
    const { id } = propiedad
    const { titulo_propiedad } = propiedad

    return (
        <>
            <div className='propiedad-contacto-botones-sm'>
                <a href={`https://api.whatsapp.com/send?phone=2235129032&text=%C2%A1Hola!%20quiero%20informacion%20sobre%20la%20propiedad%3A%20${titulo_propiedad !== undefined && titulo_propiedad.replaceAll(' ', '%20')}.%20(Id%3A%20${id !== undefined && id})`} className='btn-link bg-green'>Whatsapp</a>
                <a className='btn-link bg-blue' href={`/detalle/${propiedad.id}`}>Ver mas</a>
            </div>
            <div className='propiedad-contacto-sm'>
                <p><strong>Oficina: </strong> {propiedad.oficina}</p>
                <ul><li>2234727416 | 2235129032</li>
                </ul>
            </div>

        </>
    )
}
