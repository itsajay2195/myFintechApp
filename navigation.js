
import React from 'react'
import ComingSoon from './src/components/common/ComingSoon'
import Home from './src/screens/DebitScreen'
import { COLORS , icons} from './src/constants'
import WeeklyLimit from './src/screens/WeeklyLimitScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './store'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {SvgLogo,SvgCard,SvgPayment,SvgCredit,SvgAccount} from './src/assets/svgs'



export default function RootNavigation() {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    const screenOptions = {
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        tabBarActiveTintColor: COLORS.primaryGreen,
        tabBarInactiveTintColor: COLORS.lightGray,
    }

    return (
        <Provider store={store}>
            <NavigationContainer tabBar={(props) => <MyTabBar {...props} />}>
                <Tab.Navigator initialRouteName="Debit Card" screenOptions={screenOptions}  >
                    {/* <Tab.Screen name='Home' component={ComingSoon} options={{tabBarIcon:({color})=><SvgUri width="100%" height="100%" source='https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg' />}}/> */}
                    <Tab.Screen name='Home' component={ComingSoon} options={{tabBarIcon:({color})=><SvgLogo color={color}/>}} />    
                    <Tab.Screen name='Debit Card' component={Home}  options={{tabBarIcon:({color})=><SvgCard color={color}/>}} />  
                    <Tab.Screen name='Payments' component={ComingSoon}  options={{tabBarIcon:({color})=><SvgPayment color={color}/>}} />  
                    <Tab.Screen name='Credit' component={ComingSoon}  options={{tabBarIcon:({color})=><SvgCredit color={color}/>}} />  
                    <Tab.Screen name='Profile' component={ComingSoon}  options={{tabBarIcon:({color})=><SvgAccount color={color}/>}} />  
                    
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>


    )
}

