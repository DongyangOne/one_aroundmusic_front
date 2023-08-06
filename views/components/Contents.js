import React from "react";
import { SafeAreaView, View, StyleSheet, Image, Text } from "react-native";

const Contents = ({ id, src, story }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Image source={story} style={styles.image}></Image>
          <Text style={styles.text}>햇빛이 따스한 오후 커피 한 잔</Text>
          <Text style={styles.date}>2023.08.05</Text>
        </View>
        {/* <View>
          <Image source={story} style={styles.image}></Image>
          <Text style={styles.text}>햇빛이 따스한 오후 커피 한 잔</Text>
          <Text style={styles.date}>2023.08.05</Text>
        </View>
        <View>
          <Image source={story} style={styles.image}></Image>
          <Text style={styles.text}>햇빛이 따스한 오후 커피 한 잔</Text>
          <Text style={styles.date}>2023.08.05</Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  content:{
  },
  storyRow: {
    flexDirection: "row",
    marginTop: 13,
  },
  image: {
    width: 350,
    height: 490,
    marginLeft: 18,
    marginRight: 18,
    marginTop: 28,
  },
  text: {
    marginLeft: 25,
    marginTop: 15,
    fontSize: 12,
  },
  date: {
    marginLeft: 25,
    marginTop: 6,
    fontSize: 10,
  },
});

export default Contents;
