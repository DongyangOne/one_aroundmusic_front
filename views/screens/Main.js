import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  View,
} from "react-native";

import Header from "../components/Header";
import MainStory from "../components/MainStory";

const DATA = [
  {
    id: 'minkue',
    src: require("../../assets/tiger.jpeg"),
  },
  {
    id: 'sejin',
    src: require("../../assets/tiger.jpeg"),
  },
  {
    id: 'minkue',
    src: require("../../assets/tiger.jpeg"),
  },
  {
    id: 'minkue',
    src: require("../../assets/tiger.jpeg"),
  },
];

const FriendItem = ({id, src}) => (
  <View>
    <MainStory id={id} src={src} />
  </View>
);

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
          <Header />
          {/* <MainStory /> */}
          <FlatList
          data={DATA}
          renderItem={({item}) => (
            <FriendItem id={item.id} src={item.src}/>
          )}
          numColumns={5}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Main;
