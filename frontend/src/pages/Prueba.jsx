import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'


export function Prueba() {
    const [text, setText] = useLocalStorage('text', '')
    const numero = 130000
    return (
        <>
            <h1>Prueba</h1>
            <p>{numero}</p>
        </>
    )
}
