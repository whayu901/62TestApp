import { useEffect, useState, useCallback } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        searchApi();
    }, [])

    const searchApi = async (searchTerm, offset) => {
        try {
            setLoading(true)
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: 'new york',
                    offset: 10
                }
            })
            if (response) {
                setLoading(false)
                setResult(response.data.businesses)
            }
        } catch (err) {
            setErrorMessage('List Yang Anda Cari Tidak Ada')
        }
    }

    return [searchApi, result, errorMessage, loading];
};
