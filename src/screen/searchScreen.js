import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Search from '../components/searchBar'
import useResults from '../hooks/useResullts'
import Result from '../components/resultList'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, result, errorMessage] = useResults()
    return (
        <View style={{ flex: 1 }}>
            <Search term={term} onTermChange={newTerm => setTerm(newTerm)} onTermSubmit={() => searchApi(term)} />
            <ScrollView >
                <Result result={result} />
            </ScrollView>
        </View>
    )
}

export default SearchScreen;