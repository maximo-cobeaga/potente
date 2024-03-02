import React from 'react'

export function PropDestacada({ propiedad }) {
    const { imagenes } = propiedad
    return (
        <a className='prop-destacada' href={`/detalle/${propiedad.id}`} >
            <img className='image-prop' src={imagenes[0] != undefined && imagenes[0].imagen} alt={propiedad.titulo} />
            <div className='propiedad-body'>
                {propiedad.publicar_precio ? (
                    <h4 className='precio'>{propiedad.precio.toLocaleString('en', {
                        style: 'currency',
                        'currency': propiedad.moneda
                    })}</h4>
                ) : (
                    <h4 className='precio'>Consultar precio</h4>
                )}
                <p className="image-location">{propiedad.ubicacion}</p>
                <p className='image-description'>{`${propiedad.descripcion.slice(0, 100)}...`}</p>
            </div>
        </a>



        // <div className='prop-destacada'>
        //     <a href={`/detalle/${propiedad.id}`}>
        //         <img className='image-prop' src={imagenes[0].imagen} alt="" />
        //         <div className='image-body'>
        //             <div className="image-badge"><span>{propiedad.estado}</span></div>
        //             <div className="body-content">

        //                 {propiedad.publicar_precio ?
        //                     <h4 className='precio'>{propiedad.precio.toLocaleString('en', {
        //                         style: 'currency',
        //                         'currency': propiedad.moneda
        //                     })}</h4>
        //                     :
        //                     <h4>Consultar precio</h4>
        //                 }

        //                 <p className='image-description'>{`${propiedad.descripcion.slice(0, 100)}...`}</p>
        //                 <p className="image-location">{propiedad.ubicacion}</p>
        //             </div>
        //         </div>
        //     </a>

        // </div>
    )

}

