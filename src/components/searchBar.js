import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View>
            <Searchbar
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}


export default SearchBar;