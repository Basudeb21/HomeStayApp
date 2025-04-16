import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import OTPButtonStyles from './styles/OTPButtonStyles'
import TextStyles from './styles/TextStyles'
import strings from '../../../../constant/strings'
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../../../../constant/navigationStrings';



const GetOtpButton = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate(navigationStrings.OTP);
    };
    return (
        <View>
            <TouchableOpacity style={OTPButtonStyles.buttonStyle} onPress={handlePress}>
                <Text style={TextStyles.getOtp}>{strings.OTP_BTN_TXT}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GetOtpButton