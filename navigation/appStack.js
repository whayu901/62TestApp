import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import searchScreen from '../src/screen/searchScreen'

const navigator  = createStackNavigator({
    search: {
        screen: searchScreen,
        navigationOptions: {
            header: null
        }
    }
})

export default createAppContainer(navigator);