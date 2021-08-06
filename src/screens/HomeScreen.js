import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>🚀 Hello 🚀</Text>
      <Button
        style={styles.Button}
        onPress={() => navigation.navigate('Components')}
        title='Go to Components Demo'
      />
      <Button
        style={styles.Button}
        onPress={() => navigation.navigate('List')}
        title='Go to List Demo'
      />
      <Button
        style={styles.Button}
        onPress={() => navigation.navigate('Image')}
        title='Go to Image Demo'
      />
      <Button
        style={styles.Button}
        onPress={() => navigation.navigate('Counter')}
        title='Go to Counter Demo'
      />
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
