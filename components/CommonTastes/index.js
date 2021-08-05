import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';

import profile from '../Profile';

export default function CommonTastes() {
  return (
    <View>
      <Text style={styles.title}>Common tastes</Text>
      <View style={styles.usersContainer}>
        <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
        
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop:150,
  },
  usersContainer: {
    height: 60,
    marginTop: 10,
  }
});