import Axios from 'axios'

const axs = Axios.create({
    baseURL: 'http://localhost:5000'
})

const postParticipants = data => axs.post('/participants', data)

export {
    postParticipants
}