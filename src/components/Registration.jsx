import React from 'react'
import { useForm } from 'react-hook-form'

function Registration () {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => console.log(data)

    console.log(watch('example'))

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='name' ref={register({required: true})} placeholder='Nama' />
                <input name='job' ref={register({required: true})} placeholder='Pekerjaan' />
                <input name='whatsapp' ref={register({required: true})} placeholder='' />
                <input name='email' ref={register({required: true})} />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Registration