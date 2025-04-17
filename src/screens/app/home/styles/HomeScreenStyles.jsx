import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../constant/Colors";

const HomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchArea: {
        backgroundColor: Colors.THEME,
        height: verticalScale(500)
    },
    headerLogoContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(20),
        marginTop: verticalScale(25)
    },

    logo: {
        fontSize: scale(24),
        color: Colors.WHITE,
        flex: 6,
    },

    supportArea: {
        flexDirection: "row",
        flex: 4,
        justifyContent: "space-between"
    },

    wallet: {
        backgroundColor: Colors.THEME_TRANSPARENT,
        padding: moderateScale(10),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40
    },

    balanceAmmount: {
        color: Colors.WHITE,
        marginStart: moderateScale(5)
    },

    bookTextContainer: {
        marginStart: moderateScale(20),
        marginTop: verticalScale(20)
    },

    bookIndiaText: {
        color: Colors.WHITE,
        fontSize: scale(20),
        fontWeight: "500"
    },

    searchAreaContainer: {
        backgroundColor: Colors.WHITE,
        marginHorizontal: moderateScale(20),
        marginTop: verticalScale(40),
        borderRadius: 8
    }



});

export default HomeScreenStyles;