import React from 'react';
import { View, Text } from 'react-native';
import ImageDetail from '../Components/ImageDetail';
import forest from '../../assets/forest.jpg';
import beach from '../../assets/beach.jpg';
import mountain from '../../assets/mountain.jpg';

const ImageScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'space-around'}}>
      <ImageDetail title='Forest' image={forest}/>
      <ImageDetail title='Beach' image={beach}/>
      <ImageDetail title='Mountain' image={mountain}/>
    </View>
  )
}

export default ImageScreen
