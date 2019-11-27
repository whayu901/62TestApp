import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View>
            <Searchbar
                style={style.searchBar}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const style = StyleSheet.create({
    searchBar: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10
    }
})

export default SearchBar;