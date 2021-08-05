import React from "react";
import { View, Image, StyleSheet } from "react-native";
import image from "../../assets/cover-page.jpg";
import { Ionicons } from "@expo/vector-icons";

export default function CoverPage() {
  return (
    <View >
      <Image style={style.img} source={image} />
      <Ionicons 
        style={style.icon_plane}
        name="paper-plane-outline"  
        size={32} 
        color="#848484" />
      <Ionicons 
        style={style.icon_heart}
        name="heart-outline" 
        size={32} 
        color="#848484" />
    </View>
  );
}

const style = StyleSheet.create({
  img: {
    width: "100%",
    height: 400,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    resizeMode: 'cover'
  },
  icon_heart: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  icon_plane: {
    position: "absolute",
    bottom: 20,
    left: 20,
  }

});
