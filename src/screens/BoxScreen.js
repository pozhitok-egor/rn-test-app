import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={{...styles.textStyle, alignSelf: 'flex-start'}}>Child 1</Text>
      <Text style={{...styles.textStyle, alignSelf: 'center'}}>Child 2</Text>
      <Text style={{...styles.textStyle, alignSelf: 'flex-end'}}>Child 3</Text>
    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center'
  },
  textStyle: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'red',
  }
})
