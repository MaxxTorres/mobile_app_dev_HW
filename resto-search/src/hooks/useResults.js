import yelp from '../api/yelp'
import {useEffect, useState} from 'react'

export default () => {
    const [results, setResults] = useState([])
    const [errorMsg, setErrorMsg] = useState('')
    
    const searchApi = async (searchTerm) => {
    try{
    const response = await yelp.get('/search', {
        params: {
        limit: 50,
        term: searchTerm,
        location: "NYC",
        }
    })
    setResults(response.data.businesses)
    setErrorMsg('')
    } catch (err) {
        setErrorMsg('Something went wrong. Check connection')
    }
    
    }
    
    // useEffect(() => {
    // searchApi('sushi')
    // }, [])

    return [searchApi, results, errorMsg]
}