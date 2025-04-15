import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import OTPButtonStyles from './styles/OTPButtonStyles'
import TextStyles from './styles/TextStyles'
import strings from '../../../../constant/strings'


const GetOtpButton = () => {
    return (
        <View>
            <TouchableOpacity style={OTPButtonStyles.buttonStyle}>
                <Text style={TextStyles.getOtp}>{strings.OTP_BTN_TXT}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GetOtpButton