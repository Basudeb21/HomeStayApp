import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Offers, Profile, Search, Trips } from '../../screens';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import Colors from '../../constant/Colors';
import navigationStrings from '../../constant/navigationStrings';
import NavBarStyles from './NavBarStyles';



const Tab = createBottomTabNavigator();


const BottomNavbar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: NavBarStyles.navBar,
                tabBarActiveTintColor: Colors.ACTIVE_NAVIGATION_COLOR,
                tabBarInactiveTintColor: Colors.DISABLED_NAVIGATION_COLOR,
                headerShown: false,
            }}
        >
            <Tab.Screen
                name={navigationStrings.SEARCH}
                component={Search}
                options={{
                    tabBarLabel: navigationStrings.SEARCH,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name="search"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={navigationStrings.OFFERS}
                component={Offers}
                options={{
                    tabBarLabel: navigationStrings.OFFERS,
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name="local-offer"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={navigationStrings.TRIPS}
                component={Trips}
                options={{
                    tabBarLabel: navigationStrings.TRIPS,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name="bag-personal-outline"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={navigationStrings.PROFILE}
                component={Profile}
                options={{
                    tabBarLabel: navigationStrings.PROFILE,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name="user"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavbar