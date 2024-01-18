import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'
import axios from 'axios'


export function Prueba() {
    const [text, setText] = useLocalStorage('text', '')

    return (
        <>
            <h1>Prueba</h1>
            <button onClick={() => consulta()}>
                Prubea
            </button>
            <textarea value={text} onChange={e => setText(e.target.value)} cols="30" rows="10"></textarea>
        </>
    )
}
