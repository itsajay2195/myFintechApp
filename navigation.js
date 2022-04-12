
import React from 'react'
import {Image} from 'react-native'
import ComingSoon from './src/components/common/ComingSoon'
import Home from './src/screens/DebitScreen'
import { COLORS , icons} from './src/constants'
import WeeklyLimit from './src/screens/WeeklyLimitScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './store'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'




export default function RootNavigation() {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    const screenOptions = {
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        tabBarActiveTintColor: COLORS.primaryGreen,
        tabBarInactiveTintColor: COLORS.gray,
    }

    return (
        <Provider store={store}>
            <NavigationContainer tabBar={(props) => <MyTabBar {...props} />}>
                <Tab.Navigator initialRouteName="Debit Card" screenOptions={screenOptions}  >
                    <Tab.Screen name='Home' component={ComingSoon} options={{tabBarIcon:({color})=><Image source={icons.logo} style={{ tintColor: color, height: 20, width: 20 }} />}}/>    
                    <Tab.Screen name='Debit Card' component={Home} options={{tabBarIcon:({color})=><Image source={icons.card} style={{ tintColor: color, height: 20, width: 20 }} />}} />
                    <Tab.Screen name='Payments' component={ComingSoon} options={{tabBarIcon:({color})=><Image source={icons.payments} style={{ tintColor: color, height: 20, width: 20 }} />}}/>
                    <Tab.Screen name='Credit' component={ComingSoon} options={{tabBarIcon:({color})=><Image source={icons.credit} style={{ tintColor: color, height: 20, width: 20 }} />}}/>
                    <Tab.Screen name='Profile' component={ComingSoon} options={{tabBarIcon:({color})=><Image source={icons.account} style={{ tintColor: color, height: 20, width: 20 }} />}}/>
                    
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>


    )
}

