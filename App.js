import { useState } from "react";
import { ActivityIndicator, Alert, Button, Image, ImageBackground, Modal, Pressable, ScrollView, StatusBar, Text, Touchable, View } from "react-native";
const logoImage = require('./assets/icon.png');

export default function App (){


  return <View style={{flex: 1, backgroundColor: 'plum', padding:60}}>
    <Button title="Press Here" onPress={() => Alert.alert("Update Error", "Failed to update", [
      {
        text: "Cancel",
        onPress: () => {console.log('Cancell Pressed')}
      },
      {
        text: "Accept",
        onPress: () => {console.log('Accept Pressed')}
      }
    ])} color={'midnightblue'}/>

    
  </View>
}