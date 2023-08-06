import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  View,
  Image
} from "react-native";

import Header from "../components/Header";
import MainStory from "../components/MainStory";
import Contents from "../components/Contents";

const DATA = [
  {
    id: "또치",
    src: require("../../assets/111.jpeg"),
    story: require("../../assets/contents1.jpeg"),
  },
  {
    id: "이지금",
    src: require("../../assets/222.jpeg"),
    story: require("../../assets/contents2.jpeg"),
  },
  {
    id: "jung",
    src: require("../../assets/333.jpeg"),
    story: require("../../assets/contents3.jpeg"),
  },
  {
    id: "jin",
    src: require("../../assets/444.jpeg"),
  },
  {
    id: "yong",
    src: require("../../assets/555.jpeg"),
  },
];

const FriendItem = ({ id, src, story }) => (
  <View>
    <MainStory id={id} src={src} story={story} />
  </View>
);
const ContentsItem = ({ id, src, story }) => (
  <View>
    <Contents id={id} src={src} story={story} />
  </View>
);

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View>
        <Header />
        <View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <FriendItem id={item.id} src={item.src} story={item.story} />
            )}
            numColumns={5}
          />
          {/* <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <ContentsItem id={item.id} src={item.src} story={item.story} />
            )}
            numColumns={3}
          /> */}
          <View > 
          <Contents data={DATA}/>
        </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 17,
  },

});

export default Main;
