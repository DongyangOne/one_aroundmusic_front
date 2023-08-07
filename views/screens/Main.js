import React from "react";
import { StyleSheet, SafeAreaView, FlatList, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import Header from "../components/Header";
import MainStory from "../components/MainStory";
import Contents from "../components/Contents";
import { TouchableOpacity } from "react-native-gesture-handler";

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

const Main = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Header onPress={() => navigation.navigate("MyPage")} />

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
            <View>
              <Contents data={DATA} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginTop: 17,
  },
});

export default Main;
