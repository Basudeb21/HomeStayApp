import { View, Text, StatusBar } from 'react-native'
import React, { Component } from 'react'
import Routes from './src/navigation/Routes'
import Colors from './src/constant/Colors'
import { Login } from './src/screens'


const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <StatusBar backgroundColor={Colors.THEME} />

      <Login />
    </View>
  )
}

export default App