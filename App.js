import React, { useEffect, useState } from 'react'
import { Dimensions, StatusBar, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

export default function App() {

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  console.log(windowWidth, windowHeight)

  return (
    <View style={styles.container}>
      <StatusBar/>
      <Text>Already have an account! <Text style={{fontWeight: 'bold'}}>Login</Text></Text>
      <View style={[styles.box, {backgroundColor: 'lightblue'}]}></View>
      <View style={[styles.box, styles.andoridShadow, {backgroundColor: 'lightgreen'}]}></View>
    </View>
  )
}
 

// Border only applies to the view for both platforms. But only android supports border everywhere.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
    backgroundColor: 'green',
    padding: 30
  },
  box: {
    height: 200,
    width: 200,
    padding: 15,
    borderWidth: 5,
    borderColor: 'purple',
    borderRadius: 15,    
  },

  boxShadow: { // only applies on ios
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  andoridShadow: {    
    elevation: 6
  }
})