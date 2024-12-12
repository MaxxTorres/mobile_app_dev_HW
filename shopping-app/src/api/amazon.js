import axios from 'axios'

export default axios.create({
    baseURL: 'https://real-time-amazon-data.p.rapidapi.com',
    headers: {
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
      'x-rapidapi-key': 'DO NOT PUBLISH'
    }
  });
