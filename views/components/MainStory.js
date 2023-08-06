import React from "react";
import { SafeAreaView, View, StyleSheet, Image, Text } from "react-native";

const MainStory = ({ id, src, story }) => {
  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.storyRow}>
      <View>
        <Image source={src} style={styles.image}></Image>
        <Text style={styles.text}>{id}</Text>
      </View>
    </View>
    //  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  storyRow: {
    flexDirection: "row",
    marginTop: 13,
    height: 80,
  },
  image: {
    width: 50,
    height: 50,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginLeft: 18,
    borderWidth: 3,
    borderColor: "#B6CBE5",
  },
  text: {
    
    marginLeft: 25,
  }
});

export default MainStory;
