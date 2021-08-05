import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Profile from '../Profile';

export default function Header() {
  return (
    <View style={styles.header}>
      <Ionicons name="chevron-back" size={24} color="#848484" />
      <View>
        <Text style={styles.title}>My Playlist</Text>
        <StatusBar style="auto" />
      </View>
      <Profile/>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    color: '#848484',
    fontWeight: 'regular',
    fontSize: 20,
  },
  header: {
    paddingTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});