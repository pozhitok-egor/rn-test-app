import React from 'react'
import { View, Text, StyleSheet, FlatList, Button, Alert } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Tom', age: 18},
    { name: 'Yusha', age: 20},
    { name: 'Siena', age: 21},
    { name: 'Raveena', age: 25},
    { name: 'Selina', age: 32}
  ]

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          margin: 10
        }}
      >
        🧍‍♂️🧍‍♀️ Friends:
      </Text>
      <Text style={{textAlign: 'center'}}>
        Horizontal List
      </Text>
      <FlatList
        horizontal={true}
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>{item.name} - {item.age} y.o.</Text>
            </View>
          )
        }}
      />
      <Text style={{textAlign: 'center'}}>
        Vertical List
      </Text>
      <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>{item.name} - {item.age} y.o.</Text>
            </View>
          )
        }}
      />
      <Button title='Click me!' onPress={() =>
        Alert.alert(
          "This is alert",
          "You clicked button!",
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            { text: "OK"}
          ]
        )
      }/>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'blue',
    minWidth: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 10,
    borderRadius: 20
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  }
})

export default ListScreen;
