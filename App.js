import React from "react";
import { Text, View } from "react-native";
import Swiper from "react-native-swiper";
import Main from "./screens/Main";
import Map from "./screens/Map";
import Music from "./screens/Music";
var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
};

export default () => (
  <Swiper style={styles.wrapper} loop={false}>
    <View testID="Hello" style={styles.slide1} component>
      <Main />
    </View>
    <View testID="Beautiful" style={styles.slide2}>
      <Map />
    </View>
    <View testID="Simple" style={styles.slide3}>
      <Music />
    </View>
  </Swiper>
);
