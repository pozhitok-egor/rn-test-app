import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const TextScreen = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const errorHandler = (value) => {
    setError(
      value.length >= 8
      ? ''
      : 'Password must be at least 8 characters'
    )
  }

  return (
    <View>
      <Text style={{marginTop: 15, marginLeft: 15}}>
        Enter password:
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(newValue) => setPassword(newValue)}
        onSubmitEditing={() => errorHandler(password)}
        textContentType='password'
        secureTextEntry={true}
      />
      { error ?
        <Text style={{marginLeft: 15}}>
          {error}
        </Text>
        : null
      }
    </View>
  )
}

export default TextScreen

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white'
  }
})
