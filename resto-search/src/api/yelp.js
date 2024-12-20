import axios from 'axios'
import {REACT_APP_API_KEY} from '@env'

export default axios.create({
    headers: {
        Authorization: `Bearer ${REACT_APP_API_KEY}`,
    },
    baseURL: 'https://api.yelp.com/v3/businesses',
})