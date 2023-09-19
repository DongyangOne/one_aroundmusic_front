import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";

import Header from "../components/Header";

const MyPage = ({ navigation }) => {
  const [friend, setFriend] = useState(0); // save user's number of friends
  const [userId, setUserId] = useState("Guest"); // save userID (like MiRae23)

  useEffect(() => {
    // Load userID
    // Load the user's number of friends
    // console.log("Load Friend List");
  }, []);

  return (
    <View style={styles.contain}>
      <View style={styles.myPage}>
        {/* Profile picture */}
        <Image
          style={styles.profile}
          source={require("../../assets/profile.png")}
        />
        <View>
          {/** FUNCTION IMPLEMENT:
           * Load the logged-in user's ID */}
          <Text style={styles.id}>{userId}</Text>
          {/* Friend button area */}
          <TouchableOpacity onPress={() => navigation.navigate("FriendList")}>
            <View style={styles.friendBtn}>
              {/** FUNCTION IMPLEMENT:
               * Count the logged-in user's number of friends */}
              <Text style={styles.text}>내 친구 {friend}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Margins */}
      <View style={styles.MiddleMargin}></View>

      {/* Start blah, blah king*/}
      {/* ========================== */}
      {/** 인기왕
       * Red color, 1022Ç, Heart logo
       * onPress={() => navigation.navigate("PopularKing")
       */}
      {/* White Famous-King box */}
      <View style={styles.king}>
        <Text style={styles.kingTitle}>인기왕</Text>
        <View styles={styles.kingLogoCont}>
          <Image
            style={styles.kingLogo}
            source={require("../../assets/MyPage_medal_famous.png")}
          />
        </View>
        <View></View>
        <Text style={styles.kingCode}>1022C</Text>
        <View styles={styles.kingNextCont}>
          <Image
            style={styles.kingNext}
            source={require("../../assets/MyPage_next.png")}
          />
        </View>
      </View>

      {/* the area, filled with 남색 */}
      <View style={styles.kingContainer}>
        <View>
          <TouchableOpacity
            style={styles.reward}
            onPress={() => navigation.navigate("PopularKing")}
          >
            <Image
              source={require("../../assets/MyPage_king_popular.png")}
              style={styles.rewardLogo}
            />
            <Text style={styles.rewardText}>인기왕 리워드 보러가기</Text>
          </TouchableOpacity>
          <View style={styles.rewardLine}>
            <Image
              style={styles.rewardLinePic}
              source={require("../../assets/MyPage_midLine.png")}
            />
          </View>
        </View>

        {/** 걷기왕
         * Blue color, 200C, position-mark logo
         * onPress={() => navigation.navigate("WKing")
         */}
        <View>
          <View style={styles.king}>
            <Text style={styles.kingTitle}>걷기왕</Text>
            <View styles={styles.kingLogoCont}>
              <Image
                style={styles.kingLogo}
                source={require("../../assets/MyPage_medal_walk.png")}
              />
            </View>
            <View></View>
            <Text style={styles.kingCode}> 200C</Text>
            <View styles={styles.kingNextCont}>
              <Image
                style={styles.kingNext}
                source={require("../../assets/MyPage_next.png")}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.reward}
            onPress={() => navigation.navigate("WKing")}
          >
            <Image
              source={require("../../assets/MyPage_king_walk.png")}
              style={styles.rewardLogo}
            />
            <Text style={styles.rewardText}>걷기왕 리워드 보러가기</Text>
          </TouchableOpacity>
          <View style={styles.rewardLine}>
            <Image
              style={styles.rewardLinePic}
              source={require("../../assets/MyPage_midLine.png")}
            />
          </View>
        </View>

        {/** 듣기왕
         * Green color, 1112C, play-button logo
         * onPress={() => navigation.navigate("ListenKing")
         */}
        <View>
          <View style={styles.king}>
            <Text style={styles.kingTitle}>듣기왕</Text>
            <View styles={styles.kingLogoCont}>
              <Image
                style={styles.kingLogo}
                source={require("../../assets/MyPage_medal_listen.png")}
              />
            </View>
            <View></View>
            <Text style={styles.kingCode}>1112C</Text>
            <View styles={styles.kingNextCont}>
              <Image
                style={styles.kingNext}
                source={require("../../assets/MyPage_next.png")}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.reward}
            onPress={() => navigation.navigate("ListenKing")}
          >
            <Image
              source={require("../../assets/MyPage_king_listen.png")}
              style={styles.rewardLogo}
            />
            <Text style={styles.rewardText}>듣기왕 리워드 보러가기</Text>
          </TouchableOpacity>
          <View style={styles.rewardLine}>
            <Image
              style={styles.rewardLinePic}
              source={require("../../assets/MyPage_midLine.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

// Style Sheet
const styles = StyleSheet.create({
  // MyPage whole container
  contain: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#fff",
    // backgroundColor: "#041c3c",
  },
  // Top area
  myPage: {
    backgroundColor: "#fff",
    flexDirection: "row",
    // backgroundColor: "#0ff",
  },
  // Friend Button
  friendBtn: {
    width: 140,
    height: 27,
    marginTop: 17,
    marginLeft: 25,
    textAlign: "left",
    borderColor: "#034AA6",
    borderWidth: 1,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  // Friend button innerText
  text: {
    fontSize: 12,
    color: "#071c3c",
    textAlign: "left",
    // color: "#034AA6",
  },
  // user ID
  id: {
    fontSize: 24,
    marginTop: 20,
    marginLeft: 25,
    color: "#071c3c",
  },
  // Profile picture
  profile: {
    width: 100,
    height: 104,
    marginLeft: 34,
  },
  // for Middle margin area
  MiddleMargin: {
    marginTop: 30,
  },
  // king Whole Container
  kingContainer: {
    backgroundColor: "#041c3c",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: -40,
    paddingVertical: 40,
    zIndex: 10,
  },
  // blah, blah king box style
  king: {
    zIndex: 50,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderColor: "#041c3c",
    borderWidth: 1,
    borderRadius: 25,
    marginHorizontal: 25,
  },
  // king inner title text (like 인기왕, 걷기왕, 듣기왕)
  kingTitle: {
    fontSize: 23,
    color: "#000",
    marginLeft: 25,
  },
  // Badge Picture Container
  kingLogoCont: {
    alignItems: "left",
  },
  // Badge Picture logo size
  kingLogo: {
    width: 70,
    height: 70,
  },
  // king code
  kingCode: {
    fontSize: 11,
    color: "#000",
  },
  // Next Button (Arrow picture)
  kingNext: {
    width: 20,
    height: 20,
    marginRight: 25,
  },
  // reward container
  reward: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 40,
  },
  // reward mini logo (like heart, position-mark, play-button etc.)
  rewardLogo: {
    width: 23,
    height: 23,
    marginRight: 10,
  },
  // ~~~ 리워드 보러가기
  rewardText: {
    color: "#ccc",
    width: 299,
    height: 23,
    marginRight: 10,
    margin: 13,
  },
  // looooong arrow container
  rewardLine: {
    marginHorizontal: 35,
    marginTop: -10,
    marginBottom: 10,
  },
  // looooong arrow picture
  rewardLinePic: {
    width: 350,
    resizeMode: "center",
  },
});

export default MyPage;
