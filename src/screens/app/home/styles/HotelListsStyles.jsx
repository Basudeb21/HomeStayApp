import { StyleSheet } from 'react-native';
import Colors from '../../../../constant/Colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const HotelListsStyles = StyleSheet.create({
    container: {
        marginVertical: verticalScale(20),
        marginHorizontal: moderateScale(20)
    },
    mainText: {
        fontSize: scale(16),
        fontWeight: "600"
    },
    numberText: {
        color: Colors.THEME
    },
    listContainer: {
        marginTop: verticalScale(20)
    },
    listImages: {
        width: "67%",
        height: verticalScale(170),
        borderRadius: scale(20)
    },
    hotelName: {
        fontSize: scale(16),
        fontWeight: "500"
    },
    hotelInfo: {
        color: Colors.FADE,
        fontSize: scale(12)
    },
    ratingcontainer: {
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center"
    },
    ratingTxt: {
        backgroundColor: Colors.RATINGS_BG,
        alignSelf: "flex-start",
        paddingHorizontal: moderateScale(8),
        paddingVertical: verticalScale(3),
        borderRadius: scale(100),
        color: Colors.WHITE,
        fontSize: scale(12),
        marginTop: verticalScale(5)
    },
    rateCount: {
        marginStart: moderateScale(10),
        color: Colors.FADE,
        fontSize: scale(10),
        textAlign: "center"

    }
})

export default HotelListsStyles

