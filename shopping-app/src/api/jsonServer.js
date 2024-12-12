import axios from 'axios'

export default axios.create({
    // baseURL changes everytime npm run tunnel is started
    baseURL: 'https://7492-68-129-210-72.ngrok-free.app'
})