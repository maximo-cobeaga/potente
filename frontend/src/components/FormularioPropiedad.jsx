import React from 'react'
import { useForm } from 'react-hook-form'
import { enviarContacto } from '../api/contactoAPI'
import toast, { Toaster } from 'react-hot-toast'

export function FormularioPropiedad({ oficina, propiedad }) {
    const { register, handleSubmit, formState: { errors } } = useForm()

    async function submitFunction(e) {
        const { status } = await enviarContacto({ ...e, 'propiedad': propiedad.titulo_propiedad, 'id': propiedad.id, 'oficina': oficina })
    }
    const notify = () => {
        if (errors.name || errors.email || errors.telefono || errors.mensaje) {
            toast.error('Hubo un error, revise el formulario')
        } else {
            toast.success('El formulario se envio correctamente')
        }
    }

    return (
        <form className='form-propiedad' onSubmit={handleSubmit(submitFunction)}>
            <h4>Contactános</h4>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='form-input'>
                <label>Nombre</label>
                <input {...register('nombre', {
                    required: true
                })} type="text" placeholder='Ingrese su nombre' />
                {errors.nombre && <span className='error-input'>El nombre es obligatorio</span>}
            </div>

            <div className='form-input'>
                <label>Email</label>
                <input {...register('email', {
                    required: true
                })} type="email" placeholder='Ingrese su email' />
                {errors.email && <span className='error-input'>El email es obligatorio</span>}
            </div>

            <div className='form-input'>
                <label>Numero de telefono</label>
                <input {...register('telefono', {
                    required: true
                })} type="number" placeholder='Ingrese su telefono' />
                {errors.telefono && <span className='error-input'>El telefono es obligatorio</span>}
            </div>

            <div className='form-input'>
                <label>Mensaje</label>
                <textarea {...register('mensaje', {
                    required: true
                })} placeholder='Ingrese su mensaje' />
                {errors.mensaje && <span className='error-input'>El mensaje es obligatorio</span>}
            </div>
            <input onClick={notify} className='btn-submit' type="submit" value="Enviar" />
        </form>
    )
}
