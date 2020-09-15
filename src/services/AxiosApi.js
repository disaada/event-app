import Axios from 'axios'

const axs = Axios.create({
    baseURL: process.env.BASE_URL || 'http://localhost:5000'
})

const postParticipants = data => axs.post('/participants', data)

export {
    postParticipants
}