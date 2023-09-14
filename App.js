import { Image, ImageBackground, Text, View } from "react-native";
const logoImage = require('./assets/icon.png');

export default function App (){
  return <View style={{flex: 1, backgroundColor: 'plum'}}>
            <ImageBackground style={{flex: 1}} source={logoImage}>
              <Image style={{height: 300, width: 300}} source={logoImage}/>
              <Image style={{height: 300, width: 300}} source={{uri: 'https://picsum.photos/300'}}/>
            </ImageBackground>
          </View>
} 