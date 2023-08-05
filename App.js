import React from "react";
import { Text, View } from "react-native";
import Swiper from "react-native-swiper";
import Main from "./views/screens/Main";
import Map from "./views/screens/Map";
import Music from "./views/screens/Music";
import ArScreen from "./views/screens/ArScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
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
const Stack = createStackNavigator();
export default () => (
  <Swiper style={styles.wrapper} loop={false} index={1}>
    <View testID="Hello" style={styles.slide1}>
      <Music />
    </View>
    <View testID="Beautiful" style={styles.slide2}>
      <Main />
    </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="ArScreen" component={ArScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Swiper>
);
