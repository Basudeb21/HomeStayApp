import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react';
import OtpStyles from './components/OtpStyles';
import { useNavigation } from '@react-navigation/native';
import strings from '../../../constant/strings';



const Otp = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
        });
    };

    const handleOtpChange = (text, index) => {
        if (/^[0-9]?$/.test(text)) {
            const newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);
            if (text && index < otp.length - 1) {
                const nextInput = index + 1;
                refs[nextInput]?.focus();
            }
        }
    };
    const refs = [];

    return (
        <View style={OtpStyles.container}>
            <Text style={OtpStyles.title}>{strings.ENTER_OTP}</Text>
            <Text style={OtpStyles.subtext}>
                {strings.OTP_SEND_TO} <Text style={OtpStyles.bold}>{strings.DEFAULT_MOBILE_NUMBER}</Text>
            </Text>
            <TouchableOpacity>
                <Text style={OtpStyles.editNumber} onPress={handlePress}>{strings.EDIT_NUMBER}</Text>
            </TouchableOpacity>

            <View style={OtpStyles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (refs[index] = ref)}
                        style={OtpStyles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={(text) => handleOtpChange(text, index)}
                    />
                ))}
            </View>

            <View style={OtpStyles.actionsRow}>
                <TouchableOpacity>
                    <Text style={OtpStyles.resendText}>Resend OTP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={OtpStyles.whatsappContainer}>
                    <Image
                        source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png',
                        }}
                        style={OtpStyles.whatsappIcon}
                    />
                    <Text style={OtpStyles.whatsappText}>{strings.GET_OTP_ON_WP}</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={OtpStyles.submitButton}>
                <Text style={OtpStyles.submitText}>{strings.SUBMIT_OTP}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Otp