import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';  
import Header from './components/Header/Header.js';
import CoverPage from './components/CoverPage';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.fullWidth, styles.CoverPage}><CoverPage /></View>
      <View style={styles.fullWidth}><Header/></View>
      <View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#140404',
    alignItems: 'end',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    position: 'relative',
  },
  fullWidth: {
    width: '100%'
  },
  CoverPage: {
    position: 'absolute',
    width: '100%',
    height: 400,
  }

});
/*
ICONS
      <Ionicons name="heart" size={24} color="black" />


COLORS
  #140404 - bg
  #a51c0b - orange
  #640a05 - brown
  #848484 - grey
  #847c84 - grey2
*/
