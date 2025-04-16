import { Modal, StyleSheet } from "react-native"
import Colors from "../../../../../constant/Colors";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const WhatsApp = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginVertical: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    text: {
        fontSize: 14,
        color: Colors.BLACK,
    },
});

export default WhatsApp;