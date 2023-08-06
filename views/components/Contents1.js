import React from "react";
import { SafeAreaView, View, StyleSheet, Image, Text } from "react-native";

const Contents1 = ({ data }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Image source={data[0].story} style={styles.image}></Image>
          <Text style={styles.text}>봄 바람을 맞으면서 기분이 산뜻해졌다</Text>
          <Text style={styles.date}>2023.08.07</Text>
          <Image source={data[1].story} style={styles.image}></Image>
          <Text style={styles.text}>햇빛이 따스한 오후 커피 한 잔</Text>
          <Text style={styles.date}>2023.08.05</Text>
          <Image source={data[2].story} style={styles.image}></Image>
          <Text style={styles.text}>교회에도 봄이 왔다. 개강이 설렌다.</Text>
          <Text style={styles.date}>2023.03.01</Text>
          <Image source={data[3].story} style={styles.image}></Image>
          <Text style={styles.text}>집에 가고싶다..</Text>
          <Text style={styles.date}>2022.12.14</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  content: {},
  storyRow: {
    flexDirection: "row",
    marginTop: 13,
  },
  image: {
    width: 350,
    height: 520,
    marginTop: 30,
  },
  text: {
    marginLeft: 25,
    marginTop: 15,
    fontSize: 12,
    color: "black",
  },
  date: {
    marginLeft: 25,
    marginTop: 6,
    fontSize: 10,
    color: "black",
  },
});

export default Contents1;
