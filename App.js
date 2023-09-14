import { useState } from "react";
import { Button, Image, ImageBackground, Modal, Pressable, ScrollView, Text, Touchable, View } from "react-native";
const logoImage = require('./assets/icon.png');

export default function App (){

  const [openModal, setOpenModal] = useState(false)

  return <View style={{flex: 1, backgroundColor: 'plum', padding:60}}>
    <Button title="Open Modal" onPress={() => setOpenModal(true)} color={'midnightblue'}/>
    
    <Modal 
      visible={openModal} 
      onRequestClose={() => setOpenModal(false)}
      animationType="slide" // animation types [slide, fade]
      presentationStyle="pageSheet" // presentation styles [pageSheet, formSheet] #only for ios
    >
      <View style={{backgroundColor: 'lightblue', padding: 60, flex: 1}}>
        <Text style={{fontSize: 40}}>Modal Content</Text>
        <Button onPress={() => setOpenModal(false)} title="Close"/>
      </View>
    </Modal>
    
  </View>
} 