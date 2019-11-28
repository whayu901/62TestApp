import React, { useEffect, useState, } from 'react'
import { View, Text, ScrollView, Animated, Easing, StyleSheet, RefreshControl, ActivityIndicator } from 'react-native'
import Search from '../components/searchBar'
import useResults from '../hooks/useResullts'
import Result from '../components/resultList'
import connection from '../connection'
import animationConnection from '../../assets/connection.json'
import LottieView from 'lottie-react-native'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [progress, setProgress] = useState(new Animated.Value(0));
    const [searchApi, result, errorMessage, loading] = useResults()
    const [useNetInfo] = connection()

    const netInfo = useNetInfo()

    useEffect(() => {
        Animated.timing(progress, {
            toValue: 1,
            duration: 10000,
            easing: Easing.linear,
        }).start();
    })

    return (
        <View style={{ flex: 1 }}>
            {
                netInfo ?
                    <View style={{ flex: 1 }}>
                        <Search term={term} onTermChange={newTerm => setTerm(newTerm)} onTermSubmit={() => searchApi(term, 0)} />
                        <ScrollView refreshControl={<RefreshControl
                            refreshing={false} onRefresh={() => searchApi(term, 0)}
                        />}>
                            <Result result={result} term={term} loading={loading}/>
                        </ScrollView>
                    </View>
                    :
                    <View style={style.offline}>
                        <LottieView
                            progress={progress}
                            loop={true}
                            source={animationConnection}
                            style={{ height: 150, width: 150, marginLeft: 10 }}
                        />
                        <View style={{ marginTop: 15 }}>
                            <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: '700' }}>Kami Tidak Menemukan Internet</Text>
                        </View>
                    </View>
            }
        </View>
    )
}

const style = StyleSheet.create({
    offline: {
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        flex: 1
    }
})

export default SearchScreen;