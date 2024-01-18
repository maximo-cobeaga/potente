import React from 'react'
import { DetallePropiedadXl } from './DetallePropiedadXl'
import { DetallePropiedadSm } from './DetallePropiedadSm'
import { Fragment } from 'react'
import Media from 'react-media';

export function DetallePropiedad() {

    return (
        <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px)"
        }}>
            {matches => (
                <Fragment>
                    {matches.small && (<DetallePropiedadSm />)}
                    {matches.medium && (<DetallePropiedadXl />)}
                </Fragment>
            )}

        </Media>

        // <>
        //     <DetallePropiedadXl />
        //     <DetallePropiedadSm />
        // </>
    )

}
