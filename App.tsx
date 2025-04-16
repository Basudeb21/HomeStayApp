import { View, Text, StatusBar } from 'react-native'
import React, { Component } from 'react'
import Colors from './src/constant/Colors'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/Routes';



const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <StatusBar backgroundColor={Colors.THEME} />

      <Routes />
    </View>
  )
}

export default App