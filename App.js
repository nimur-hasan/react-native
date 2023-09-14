import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
const logoImage = require('./assets/icon.png');

export default function App (){
  return <View style={{flex: 1, backgroundColor: 'plum', margin:60}}>
    <ScrollView>
      <ImageBackground style={{flex: 1}} source={logoImage}>
        <Image style={{height: 300, width: 300}} source={logoImage}/>
        <Image style={{height: 300, width: 300}} source={{uri: 'https://picsum.photos/300'}}/>
        <Text style={{fontSize: 50}}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Text>
      </ImageBackground>
    </ScrollView>
  </View>
} 