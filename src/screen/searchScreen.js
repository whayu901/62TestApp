import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Search from '../components/searchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [result, setResult] = useState([])

    // useEffect(() => {
    //     searchApi()
    // }, [])

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                term: term,
                location: 'new york'
            }
        })
        setResult(response.data.businesses)
        console.log(result)
    }

    return (
        <View>
            <Search term={term} onTermChange={newTerm => setTerm(newTerm)} onTermSubmit={() => searchApi()} />
            <Text>Hello</Text>
            <Text>{term}</Text>
            <Text>{result.length}</Text>
        </View>
    )
}

export default SearchScreen;