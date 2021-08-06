import React from 'react'
import { View, Text, Image } from 'react-native'

const ImageDetail = ({image, title}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image source={image}/>
      <Text>{title}</Text>
    </View>
  )
}

export default ImageDetail
