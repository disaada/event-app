import React from 'react'
import { useForm } from 'react-hook-form'
import { postParticipants } from '../services/AxiosApi'
import { useHistory } from 'react-router-dom'

function Registration () {
    const { register, handleSubmit } = useForm()
    const history = useHistory()

    const onSubmit = (data) => {
        postParticipants(data)
        .then((response) => {
            if (response.status === 201) {
                history.push('/RegistrationNotice')
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                Nama : <input name='name' ref={register} placeholder='Nama' /> <br />
                Kampus : <input name='campus' ref={register} placeholder='Kampus' /> <br />
                Angkatan : <input name='generation' ref={register} placeholder='Angkatan' /> <br />
                Fakultas : <input name='faculty' ref={register} placeholder='Fakultas' /> <br />
                WhatsApp<input name='whatsapp' ref={register} placeholder='No WhatsApp' /> <br />
                Email <input name='email' ref={register} placeholder='Email' /> <br />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Registration