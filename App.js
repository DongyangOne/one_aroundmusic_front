import React from "react";
import { Text, View } from "react-native";
import Swiper from "react-native-swiper";
import Main from "./views/screens/Main";
import Map from "./views/screens/Map";
import Music from "./views/screens/Music";
import Arscreen from "./views/screens/ArScreen";
var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFF",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFF",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFF",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
};

export default () => (
  <Swiper style={styles.wrapper} loop={false} index={1}>
    <View testID="Hello" style={styles.slide1}>
      <Music />
    </View>
    <View testID="Beautiful" style={styles.slide2}>
      <Main />
    </View>
    <View testID="Simple" style={styles.slide3}>
      <Map />
    </View>
    <Arscreen />
  </Swiper>
);
