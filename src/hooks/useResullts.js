import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [result, setResult] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        searchApi()
    }, [])

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: 'new york'
                }
            })
            setResult(response.data.businesses)
        } catch (err) {
            setErrorMessage('Something went wrong')
        }
    }
    return [searchApi, result, errorMessage];
};
