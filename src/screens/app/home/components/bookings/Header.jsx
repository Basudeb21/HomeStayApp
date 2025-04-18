import { View, Text } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import Colors from '../../../../../constant/Colors'
import HomeScreenStyles from '../../styles/HomeScreenStyles'



const Header = () => {
    return (
        <View style={HomeScreenStyles.headerLogoContainer}>
            <Text style={HomeScreenStyles.logo}>GharBasai</Text>
            <View style={HomeScreenStyles.supportArea}>
                <View style={HomeScreenStyles.wallet}>
                    <Entypo
                        name="wallet"
                        size={14}
                        color={Colors.WHITE}
                    />
                    <Text style={HomeScreenStyles.balanceAmmount}>₹ 1.5K</Text>
                </View>
                <View style={HomeScreenStyles.wallet}>
                    <AntDesign
                        name="customerservice"
                        size={14}
                        color={Colors.WHITE}
                    />
                </View>
            </View>
        </View>
    )
}

export default Header