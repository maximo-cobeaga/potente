import React, { Fragment } from 'react'
import { DestacadasCarrusel } from './DestacadasCarrusel'
import Media from 'react-media';

export function Destacadas() {
    return (
        <section className='seccion-destacados'>
            <h2>Propiedades Destacadas</h2>
            <div className='container-props'>
                <Media queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px) and (max-width:1199px)",
                    large: "(min-width: 1200px)"
                }}>
                    {matches => (
                        <Fragment>
                            {matches.small && <DestacadasCarrusel cant={1} />}
                            {matches.medium && <DestacadasCarrusel cant={2} />}
                            {matches.large && <DestacadasCarrusel cant={3} />}
                        </Fragment>)
                    }
                </Media>
            </div>
        </section >
    )
}
