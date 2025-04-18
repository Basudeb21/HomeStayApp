import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import BestDealsStyles from '../home/styles/BestDealsStyles'


const OfferedCard = () => {
    return (
        <View>
            <ImageBackground style={BestDealsStyles.card}
                imageStyle={BestDealsStyles.bgImage}
                source={{ uri: "https://s7ap1.scene7.com/is/image/incredibleindia/howrah-bridge-howrah-west-bengal-city-1-hero?qlt=82&ts=1726644778421" }}
            >
                <View style={BestDealsStyles.tag}>
                    <Text style>FABAPRIL</Text>
                </View>
                <View style={BestDealsStyles.txtContainer}>
                    <Text style={BestDealsStyles.discountTxt}>Up to 60% off</Text>
                    <Text style={BestDealsStyles.discountTxt}>+5000 Credits</Text>
                    <Text style={BestDealsStyles.describtion}>Deals of the month</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default OfferedCard