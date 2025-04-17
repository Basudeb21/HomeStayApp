import { View, Text } from 'react-native'
import React from 'react'
import HotelListTopTxt from './HotelListTopTxt'
import HotelListsStyles from '../styles/HotelListsStyles'
import HotelDetailsCard from './HotelDetailsCard'

const HotelLists = () => {
    return (
        <View style={HotelListsStyles.container}>
            <HotelListTopTxt />
            <HotelDetailsCard />
        </View>
    )
}

export default HotelLists