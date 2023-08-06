import React from "react";
import { Text, View } from "react-native";
import Swiper from "react-native-swiper";
import Main from "./views/screens/Main";
import Map from "./views/screens/Map";
import Music from "./views/screens/Music";
import Music2 from "./views/screens/Music2";
import FilterScreen from "./views/screens/FilterScreen";
import ArScreen from "./views/screens/ArScreen";
import MyPage from "./views/screens/MyPage";
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Music"
          component={Music}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Filter"
          component={FilterScreen}
          options={{
            headerShown: true,
            title: "필터",
            headerTintColor: "#034AA6",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Music2"
          component={Music2}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyPage"
          component={MyPage}
          options={{
            headerShown: true,
            title: "인기왕 리워드",
            headerTintColor: "#034AA6",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="ArScreen" component={ArScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Swiper>
);
