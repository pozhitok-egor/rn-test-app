import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const CounterScreen = () => {
  const [counter, setCounter] = useState(0)
  return (
    <View>
      <Text style={styles.text}>
        Counter Screen
      </Text>
      <Button
        onPress={() => setCounter(counter+1)}
        title='Increase'
      />
      <Button
        onPress={() => setCounter(counter-1)}
        title='Decrease'
      />
      <Text style={styles.text}>
        Counted: {counter}
      </Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
  }
})
