import { createContext, useState, useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { obtenerAmenities } from './api/propiedadesAPI'

export const Context = createContext()

export function ContextProvider(props) {

    const [amenitiesApi, setAmenitiesApi] = useLocalStorage('amenities', '[]')

    useEffect(() => {
        async function cargarAmenities() {
            const { data } = await obtenerAmenities()
            setAmenitiesApi(data)
        }
        cargarAmenities()

    }, [])


    return (
        <Context.Provider value={{
            amenitiesApi,
        }}>
            {props.children}
        </Context.Provider>
    )
}