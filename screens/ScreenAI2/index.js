import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const BlueScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Blue Screen</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.text}>This is a blue screen</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0077be',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0077be'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    color: '#fff'
  }
});
export default BlueScreen;