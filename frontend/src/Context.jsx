import { createContext, useState, useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { obtenerPropiedades } from './api/propiedadesAPI'

export const Context = createContext()

export function ContextProvider(props) {
    const [propiedades, setPropiedades] = useLocalStorage('propiedades', [])
    useEffect(() => {
        async function consulta() {
            const { data } = await obtenerPropiedades()
            setPropiedades(data)
        }
        consulta()
    }, [])

    function formateoDeNumeros(n) {
        const str = n.toString().split('.')
        str[0] = str[0]
    }




    return (
        <Context.Provider value={{
            propiedades,
        }}>
            {props.children}
        </Context.Provider>
    )
}