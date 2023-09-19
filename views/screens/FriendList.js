import { useState } from "react";
import {
  FlatList,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import FriendsItem from "../components/FriendsItem";

const FriendList = () => {
  const [mode, setMode] = useState("내 친구");

  return (
    <View style={styles.container}>
      <View style={styles.mode}>
        <TouchableOpacity
          style={[
            styles.myFriend,
            mode == "내 친구"
              ? {
                  backgroundColor: "#001C3E",
                }
              : {
                  backgroundColor: "white",
                  borderColor: "#001C3E",
                  borderWidth: 0,
                },
          ]}
          onPress={() => setMode("내 친구")}
        >
          <Text
            style={
              mode == "내 친구" ? { color: "white" } : { color: "#001C3E" }
            }
          >
            내 친구
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.request,
            mode == "친구 요청"
              ? { backgroundColor: "#001C3E" }
              : {
                  backgroundColor: "white",
                  borderColor: "#000000",
                  borderWidth: 0,
                },
          ]}
          onPress={() => setMode("친구 요청")}
        >
          <Text
            style={
              mode == "친구 요청" ? { color: "white" } : { color: "#001C3E" }
            }
          >
            친구요청
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <TextInput style={styles.input} />
        <Image
          source={require("../../assets/searchIcon.png")}
          style={styles.searchIcon}
        />
      </View>
      <View>
        <Text style={styles.title}>{mode}</Text>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={mode == "내 친구" ? FRIENDSLIST : REQUEST}
            renderItem={({ item }) => (
              <FriendsItem
                name={item.name}
                image={item.image}
                state={mode == "내 친구" ? "친구 끊기" : "수락 하기"}
              />
            )}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  mode: {
    flexDirection: "row",
    marginHorizontal: 19,
    marginTop: 25,
  },
  myFriend: {
    width: 100,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    ...Platform.select({
      android: {
        elevation: 5,
      },
    }),
  },
  request: {
    width: 100,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    ...Platform.select({
      android: {
        elevation: 5,
      },
    }),
  },
  search: {
    borderWidth: 1,
    borderColor: "#C2C1C1",
    borderRadius: 10,
    width: "90%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 19,
    marginHorizontal: 19,
    justifyContent: "flex-end",
  },
  input: {
    width: "85%",
  },
  searchIcon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  title: {
    color: "#001C3E",
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 19,
    marginTop: 19,
  },
  scrollView: {
    width: 400,
    height: "80%",
  },
});

const FRIENDSLIST = [
  {
    id: 1,
    name: "김주만",
    image: require("../../assets/111.jpeg"),
  },
  {
    id: 2,
    name: "한민규",
    image: require("../../assets/111.jpeg"),
  },
  {
    id: 3,
    name: "이세진",
    image: require("../../assets/111.jpeg"),
  },
  {
    id: 4,
    name: "최수진",
    image: require("../../assets/111.jpeg"),
  },
  {
    id: 5,
    name: "이예빈",
    image: require("../../assets/111.jpeg"),
  },
  {
    id: 6,
    name: "여남경",
    image: require("../../assets/111.jpeg"),
  },
  {
    id: 7,
    name: "유예린",
    image: require("../../assets/111.jpeg"),
  },
  {
    id: 8,
    name: "유병재",
    image: require("../../assets/111.jpeg"),
  },
  {
    id: 9,
    name: "유재석",
    image: require("../../assets/111.jpeg"),
  },
  {
    id: 10,
    name: "조정석",
    image: require("../../assets/111.jpeg"),
  },
];

const REQUEST = [
  {
    id: 1,
    name: "한민규",
    image: require("../../assets/111.jpeg"),
  },
  {
    id: 2,
    name: "한민규",
    image: require("../../assets/111.jpeg"),
  },
  {
    id: 3,
    name: "한민규",
    image: require("../../assets/111.jpeg"),
  },
  {
    id: 4,
    name: "한민규",
    image: require("../../assets/111.jpeg"),
  },
  {
    id: 5,
    name: "한민규",
    image: require("../../assets/111.jpeg"),
  },
  {
    id: 6,
    name: "한민규",
    image: require("../../assets/111.jpeg"),
  },
  {
    id: 7,
    name: "한민규",
    image: require("../../assets/111.jpeg"),
  },
];

export default FriendList;
