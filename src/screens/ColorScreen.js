import React from 'react'
import { useState } from 'react';
import { Button, StyleSheet, Text, FlatList, View } from 'react-native'

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button title='Add a color' onPress={() => {
        setColors([...colors, randomRGB()])
      }}/>
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({item}) => {
          return <View
            style={{
              height: 100,
              width: '90%',
              marginVertical: 10,
              marginHorizontal: '5%',
              backgroundColor: item
            }}
          />
        }}
      />
    </View>
  )
}

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({})

export default ColorScreen
