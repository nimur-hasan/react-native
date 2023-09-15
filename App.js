import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <View style={[styles.box, {backgroundColor: 'lightblue'}]}></View>
      <View style={[styles.box, {backgroundColor: 'lightgreen'}]}></View>
    </View>
  )
}
 

// Border only applies to the view for both platforms. But only android supports border everywhere.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
    backgroundColor: 'plum',
    padding: 30
  },
  box: {
    height: 200,
    width: 200,
    padding: 15,
    borderWidth: 5,
    borderColor: 'purple',
    borderRadius: 15,
  }
})