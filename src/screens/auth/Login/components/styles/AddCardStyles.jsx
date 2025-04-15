import { StyleSheet } from "react-native"
import Colors from "../../../../../constant/Colors";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default AddCardStyles = StyleSheet.create({
    mainCard: {
        width: "100%",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        backgroundColor: Colors.THEME,
        height: verticalScale(140),
        marginBottom: verticalScale(10)
    }

})