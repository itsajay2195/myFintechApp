
import React from 'react'
import Home from './src/screens/DebitScreen'
import WeeklyLimit from './src/screens/WeeklyLimitScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './store'




export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Limit' component={WeeklyLimit} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>


    )
}
