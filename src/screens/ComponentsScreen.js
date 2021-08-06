import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  return (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>Just simple text element</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  viewStyle: {
    backgroundColor: "#ff5555",
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 25,
    paddingVertical: 10
  }
});

export default ComponentsScreen;
