import {React, useState} from "react";
import { StyleSheet, SafeAreaView, FlatList, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import Header from "../components/Header";
import MainStory from "../components/MainStory";
import Contents from "../components/Contents";
import {TouchableOpacity} from 'react-native';
import MyPage from "../screens/MyPage";

export const DATA = [
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
  {
    id: "yong",
    src: require("../../assets/555.jpeg"),
  },
  {
    id: "yong",
    src: require("../../assets/555.jpeg"),
  },
  {
    id: "yong",
    src: require("../../assets/555.jpeg"),
  },
  {
    id: "yong",
    src: require("../../assets/555.jpeg"),
  },
  {
    id: "yong",
    src: require("../../assets/555.jpeg"),
  },
];

const FriendItem = ({ src }) => (
  <View>
    <MainStory src={src} />
  </View>
);
const ContentsItem = ({ id, src, story }) => (
  <View>
    <Contents id={id} src={src} story={story} />
  </View>
);

const Main = ({ navigation, route }) => {
  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={styles.story_wrap}>
        {/* 친구 스토리 */}
        <MainStory data={DATA} />
        {/* 나의 게시물 */}
        <Contents data={DATA} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  story_wrap: {
    width: "100%",
  },
});

export default Main;
