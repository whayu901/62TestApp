import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import searchScreen from '../src/screen/searchScreen'
import detailResult from '../src/components/detailResult'

const navigator  = createStackNavigator({
    search: {
        screen: searchScreen,
        navigationOptions: {
            header: null
        }
    },
    detailResult: {
        screen: detailResult,
        navigationOptions: {
            header: null
        }
    }
})

export default createAppContainer(navigator);