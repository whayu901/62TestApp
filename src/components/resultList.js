import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Card } from 'react-native-paper'
import { withNavigation } from 'react-navigation'
import useResults from '../hooks/useResullts'

const numColumns = 2;
const ResultList = ({ result, navigation, term, offset, loading }) => {
    const [searchApi, errorMessage] = useResults()
    const formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
            data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
            numberOfElementsLastRow++;
        }
        return data;
    };

    const renderItem = ({ item }) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <View
                style={styles.item}
            >
                <Card onPress={() => navigation.navigate('detailResult', { id: item.id })}>
                    <Card.Cover source={{ uri: item.image_url }} style={{ height: 100, }} />
                    <Card.Content >
                        <View>
                            <View>
                                <Text style={{ fontWeight: 'bold', }}>{item.name}</Text>
                            </View>
                            <View style={{ marginTop: 5, marginBottom: 5 }}>
                                <Text>{item.review_count} Reviews</Text>
                            </View>
                            <View>
                                <Text>{item.rating} Stars</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
            </View>
        );
    };

    if (!result.length) {
        return null
    }

    return (
        <View>
            {
                loading  ?
                    <ActivityIndicator size='large' />
                    :
                    <FlatList
                        data={formatData(result, numColumns)}
                        style={styles.container}
                        renderItem={renderItem}
                        numColumns={numColumns}
                        keyExtractor={item => item.id}
                    />
            }

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        flex: 1,
        margin: 5,
        height: Dimensions.get('window').width / numColumns, // approximate a square
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemText: {
        color: '#fff',
    },
})

export default withNavigation(ResultList);