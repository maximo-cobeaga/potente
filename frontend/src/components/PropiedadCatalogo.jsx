import React, { Fragment, useEffect, useState } from 'react'
import Media from 'react-media';
import { useNavigate } from 'react-router-dom'

export function PropiedadCatalogo({ propiedad }) {
    const Navigate = useNavigate()
    const { imagenes } = propiedad

    return (


        <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px)"
        }}>
            {matches => (
                <Fragment>
                    {matches.small &&
                        <div className="categoria-propiedad-sm" onClick={() => Navigate("/detalle")}>
                            <div className='propiedad-imagen-sm'>
                                <img src="https://elcomercio.pe/resizer/HNec1mVtOB2Wc3wHGTBU1FVEObM=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LR2Z6HNJBZGLDFS65BHD7SJZQU.jpg" alt="" />
                                <div className='categoria-badge-sm'><span>venta</span></div>
                            </div>
                            <div className='propiedad-body-sm'>
                                <h3>Titulo de propiedad</h3>
                                <p className='propiedad-ubi-sm'>Ubicacion de la propiedad 1122</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sit nobis ea perferendis itaque! Beatae doloribus aspernatur esse dicta quasi, vel sapiente nisi ut, doloremque unde est illum tempore natus!</p>
                                <p className='propiedad-precio-sm'>USD $500.000</p>
                                <div className='propiedad-contacto-botones-sm'>
                                    <button className='bg-green'>Whatsapp</button>
                                    <button>Ver mas</button>
                                </div>
                                <div className='propiedad-contacto-sm'>
                                    <p>Ofinica de Cordoba</p>
                                    <ul>
                                        <li>2236897909</li>
                                        |
                                        <li>2236246406</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                    {matches.medium &&
                        <div className='categoria-propiedad' onClick={() => Navigate("/detalle")}>
                            <div className='categoria-propiedad-imagen'>
                                <img src={imagenes[0].imagen} alt="" />
                                <div className='cate-badge'><span>venta</span></div>
                            </div>

                            <div className="categoria-propiedad-body">
                                <h3>{ }</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eveniet nisi ab, reprehenderit iste quas voluptatibus cumque corporis, aliquam eum deserunt natus repellat debitis fuga odio porro tenetur soluta maiores!</p>
                                <p>Ubicacion</p>
                                <p className='precio'>{`${propiedad.moneda} $${propiedad.precio}`}</p>
                                <div className="bottom">
                                    <p>Oficina Cordoba 1221</p>
                                    <div className="propiedad-botones">
                                        <button>Contactar</button>
                                        <button className='bg-green'>Whatsapp</button>
                                    </div>
                                </div>

                            </div>
                        </div>}
                </Fragment>
            )}
        </Media>




    )
}
