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
    id: '또치',
    src: require("../../assets/111.jpeg"),
    story: require("../../assets/autumn.jpeg"),
  },
  {
    id: '이지금',
    src: require("../../assets/222.jpeg"),
  },
  {
    id: 'jung',
    src: require("../../assets/333.jpeg"),
  },
  {
    id: 'jin',
    src: require("../../assets/444.jpeg"),
  },
  {
    id: 'yong',
    src: require("../../assets/555.jpeg"),
  },
];

const FriendItem = ({id, src, story}) => (
  <View>
    <MainStory id={id} src={src} story={story}/>
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
            <FriendItem id={item.id} src={item.src} story={item.story}/>
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
