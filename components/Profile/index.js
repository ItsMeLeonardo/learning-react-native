import React from 'react';
import {View, Image, StyleSheet} from 'react-native';


export default function profile(props) {

  const {uriProfile, username} = props;

  return (
    <View style={styles.profile}>
      <Image
        style={styles.profileImage}
        source={{uri:{uriProfile}}}/>
      <View style={styles.profileActive}></View>
      <View>
        <Text>{username}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor:'#a51c0b',
    borderWidth: 2,
    elevation:2,
  },
  profileActive: {
    width: 10,
    height: 10,
    backgroundColor: '#a51c0b',
    right: '-5%',
    top: '15%',
    borderRadius: '50%',
    position: 'absolute'
  }
})