import { Button, Image, ImageBackground, Pressable, ScrollView, Text, Touchable, View } from "react-native";
const logoImage = require('./assets/icon.png');

export default function App (){
  return <View style={{flex: 1, backgroundColor: 'plum', padding:60}}>
    <Button title="Click Here" onPress={() => console.log('Pressed')} color={'midnightblue'}/>
    
      <Pressable onPressIn={() => {console.log('Pressed on Image In')}} onPressOut={() => {console.log('Pressed on Image Out')}} onLongPress={() => {console.log('Long Pressed on Image In')}}>
        <Image source={logoImage} style={{height: 300, width: '100%'}}/>
      </Pressable>
    
  </View>
} 