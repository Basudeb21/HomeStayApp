import { StyleSheet } from "react-native"
import Colors from "../../../../../constant/Colors";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default OTPButtonStyles = StyleSheet.create({
    buttonStyle: {
        marginHorizontal: moderateScale(20),
        backgroundColor: Colors.THEME,
        paddingVertical: verticalScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})