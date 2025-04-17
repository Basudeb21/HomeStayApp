import { StyleSheet } from 'react-native';
import Colors from '../../../../constant/Colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const DestinationStyles = StyleSheet.create({
    container: {
        marginTop: verticalScale(20),
        marginHorizontal: moderateScale(20)
    },
    mainText: {
        fontSize: scale(14),
        fontWeight: "500"
    },
    destinationImgs: {
        height: scale(50),
        width: scale(50),
        borderRadius: scale(100),
        marginStart: scale(10)
    },
    destinationImageScroll: {
        marginVertical: verticalScale(10),
        flex: 1,
        flexDirection: "row"
    }

});

export default DestinationStyles;
