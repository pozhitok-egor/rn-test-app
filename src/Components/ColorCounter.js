import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  const [increase, setIncrease] = useState()
  const [decrease, setDecrease] = useState()

  useEffect(() => {
    let timer;
    if (increase)
      timer = setInterval(onIncrease, 100)
    return () => {
      clearInterval(timer)
    }
  }, [increase])

  useEffect(() => {
    let timer;
    if (decrease)
      timer = setInterval(onDecrease, 100)
    return () => {
      clearInterval(timer)
    }
  }, [decrease])

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 20}}>{color}</Text>
      <Button style={styles.button} onPress={onIncrease} title={`increase ${color}`}/>
      <Button style={styles.button} onPress={onDecrease} title={`decrease ${color}`}/>
      <TouchableHighlight
        onPressIn={() => setIncrease(true)}
        onPressOut={() => setIncrease(false)}
        underlayColor="white"
      >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Increase {color} long press</Text>
          </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPressIn={() => setDecrease(true)}
        onPressOut={() => setDecrease(false)}
        underlayColor="white"
      >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Decrease {color} long press</Text>
          </View>
      </TouchableHighlight>
    </View>
  )
}

export default ColorCounter

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase'
  }
})
