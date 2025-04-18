import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BestDeals from '../home/components/BestDeals'
import OfferedCard from './OfferedCard'
import OfferStyles from './styles/OfferStyles'

const Offers = () => {
    return (
        <View>
            <ScrollView contentContainerStyle={OfferStyles.scrollContainer}>
                <Text style={OfferStyles.dealTxt}>Best deals for you</Text>
                {Array.from({ length: 8 }).map((_, index) => (
                    <View style={OfferStyles.cardParent}>
                        <OfferedCard />
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Offers