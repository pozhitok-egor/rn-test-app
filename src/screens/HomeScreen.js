import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>🚀 Hello 🚀</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Button: {
    marginTop: 5
  },
  text: {
    textAlign: 'center',
    fontSize: 24
  }
});

export default HomeScreen;
