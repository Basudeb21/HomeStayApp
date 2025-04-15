import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from "../constant/navigationStrings"

import {
    Home,
    HotelInfo,
    Profile,
    Search,
    SearchResult,
    Trips,
    OfferedCities,
    Offers
} from "../screens";

const Stack = createNativeStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={navigationStrings.HOME} component={Home} />
            <Stack.Screen name={navigationStrings.HOTEL_INFO} component={HotelInfo} />
            <Stack.Screen name={navigationStrings.PROFILE} component={Profile} />
            <Stack.Screen name={navigationStrings.SEARCH} component={Search} />
            <Stack.Screen name={navigationStrings.SEARCH_RESULT} component={SearchResult} />
            <Stack.Screen name={navigationStrings.TRIPS} component={Trips} />
            <Stack.Screen name={navigationStrings.OFFERED_CITIES} component={OfferedCities} />
            <Stack.Screen name={navigationStrings.OFFERS} component={Offers} />
        </Stack.Navigator>
    )
}

