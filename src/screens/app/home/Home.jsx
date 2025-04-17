import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HomeScreenStyles from "./styles/HomeScreenStyles"
import Header from './components/Header'
import BookText from './components/BookText'
import BookingSearchArea from './components/BookingSearchArea'
import RecentSearch from './components/RecentSearch'
import Destination from './components/Destination'
import HotelLists from './components/HotelLists'
const Home = () => {
    return (
        <ScrollView style={HomeScreenStyles.container}>
            <View style={HomeScreenStyles.searchArea}>
                <Header />
                <BookText />
                <BookingSearchArea />
            </View>
            <RecentSearch />
            <Destination />
            <HotelLists />
        </ScrollView>
    )
}

export default Home