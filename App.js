import { useState } from "react";
import { ActivityIndicator, Button, Image, ImageBackground, Modal, Pressable, ScrollView, StatusBar, Text, Touchable, View } from "react-native";
const logoImage = require('./assets/icon.png');

export default function App (){

  const [openModal, setOpenModal] = useState(false)

  return <View style={{flex: 1, backgroundColor: 'plum', padding:60}}>
    <Button title="Press Here" onPress={() => setOpenModal(true)} color={'midnightblue'}/>
    
    <ActivityIndicator 
      size='large' 
      color={'midnightblue'} 
      animating={true} // predefined animating true, controlled by state.
    /> 

    
  </View>
}