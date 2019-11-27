import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Appbar } from 'react-native-paper'
import yelp from '../api/yelp'
import { SliderBox } from 'react-native-image-slider-box';
import { AntDesign } from '@expo/vector-icons'

const detailResult = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')

    const getDetailResult = async (id) => {
        const response = await yelp.get(`${id}`);
        setResult(response.data)
    }

    useEffect(() => {
        getDetailResult(id)
    }, [])

    if (!result) {
        return null
    }
    return (
        <View style={{ flex: 1 }}>
            <Appbar style={{ marginTop: 27 }}>
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}
                />
                <Appbar.Content
                    title={result.name}
                />
            </Appbar>
            <View>
                <View >
                    <SliderBox
                        images={result.photos}
                        sliderBoxHeight={200}
                        onCurrentImagePressed={index =>
                            console.warn(`image ${index} pressed`)
                        }
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                        paginationBoxVerticalPadding={20}
                        circleLoop
                    />
                </View>
                <View>
                    <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
                        <View style={{ padding: 20, borderColor: '#f1f1f1', borderWidth: 2, alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>{result.review_count}</Text>
                            <View>
                                <Text>Reviews</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10,}}>
                        <View style={{ padding: 20, borderColor: '#f1f1f1', borderWidth: 2, alignItems: 'center', flexDirection: 'row', flex: 0.5, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20 }}>{result.rating}</Text>
                            <View>
                                <AntDesign name="staro" />
                            </View>
                        </View>
                        <View style={{ padding: 20, borderColor: '#f1f1f1', borderWidth: 2, alignItems: 'center', flexDirection: 'row', flex: 0.5, justifyContent: 'center' }}>
                            <View>
                    <Text style={{textAlign: 'center'}}>{result.price}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default detailResult;