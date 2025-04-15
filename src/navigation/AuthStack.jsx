import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from "../constant/navigationStrings"
import {
    Login,
    Otp
} from "../screens";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
            <Stack.Screen name={navigationStrings.OTP} component={Otp} />
        </Stack.Navigator>
    )
}

