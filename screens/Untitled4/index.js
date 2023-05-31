import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.DSGJESzc}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#df3838"
  },
  DSGJESzc: {
    height: 60,
    width: 140,
    backgroundColor: "#f63b3b",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled4;