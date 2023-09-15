import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import Header from "../components/Header";

const MyPage = ({ navigation }) => {
  /** 친구 수 저장 Variable */
  const [friend, setFriend] = useState(0);

  useEffect(() => {
    // 친구 수 불러오기
    // console.log("Load Friend List");
  }, []);

  return (
    <View style={styles.contain}>
      <View style={styles.myPage}>
        <Image
          style={styles.profile}
          source={require("../../assets/profile.png")}
        />
        <View>
          <Text style={styles.id}>MiRae23</Text>
          <TouchableOpacity onPress={() => navigation.navigate("FriendList")}>
            <View style={styles.friendBtn}>
              {/* 친구 몇명 있는지 계산? */}
              <Text style={styles.text}>내 친구 {friend}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* 공백 */}
      <View style={{ marginTop: 30 }}></View>

      {/* 무슨 왕 시작 */}
      {/* ========================== */}
      {/* <LinearGradient
        colors={["transparent", "#aaa"]}
        style={styles.kingGradient}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0, y: 0 }}
        // locations={(0, 0.1, 0)}
      >
        <LinearGradient
          colors={["transparent", "#aaa"]}
          style={styles.kingGradient}
          start={{ x: 0.03, y: 0 }}
          end={{ x: 0, y: 0 }}
        > */}
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
      {/* </LinearGradient>
      </LinearGradient> */}
      <View style={styles.kingContainer}>
        {/** 인기왕
         * Red, 1022Ç, 하트 표시
         * onPress={() => navigation.navigate("PopularKing")
         */}
        <View>
          <TouchableOpacity
            style={styles.reward}
            onPress={() => navigation.navigate("PopularKing")}
          >
            <Image
              source={require("../../assets/MyPage_king_popular.png")}
              style={styles.rewardLogo}
            />
            <Text style={styles.rewardreward}>인기왕 리워드 보러가기</Text>
          </TouchableOpacity>
          <View style={styles.rewardLine}>
            <Image
              style={styles.rewardLinePic}
              source={require("../../assets/MyPage_midLine.png")}
            />
          </View>
        </View>

        {/** 걷기왕
         * 파란색, 200C, 위치 표시
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
            <Text style={styles.rewardreward}>걷기왕 리워드 보러가기</Text>
          </TouchableOpacity>
          <View style={styles.rewardLine}>
            <Image
              style={styles.rewardLinePic}
              source={require("../../assets/MyPage_midLine.png")}
            />
          </View>
        </View>

        {/** 듣기왕
         * 초록색, 1112C, 재생 표시
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
            <Text style={styles.rewardreward}>듣기왕 리워드 보러가기</Text>
          </TouchableOpacity>
          <View style={styles.rewardLine}>
            <Image
              style={styles.rewardLinePic}
              source={require("../../assets/MyPage_midLine.png")}
            />
          </View>
        </View>

        {/* Previous Code */}
        {/* <Image
          source={require("../../assets/king1.png")}
          style={styles.kingking}
        ></Image>
        <Image
          source={require("../../assets/king2.png")}
          style={styles.kingking}
        ></Image>
        <Image
          source={require("../../assets/king3.png")}
          style={styles.kingking}
        ></Image> */}
      </View>

      {/* Previous Code */}
      {/* <View style={styles.reward}>
        <TouchableOpacity onPress={() => navigation.navigate("PopularKing")}>
          <Image
            source={require("../../assets/reward1.png")}
            style={styles.rewardreward}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("WKing")}>
          <Image
            source={require("../../assets/reward2.png")}
            style={styles.rewardreward}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ListenKing")}>
          <Image
            source={require("../../assets/reward3.png")}
            style={styles.rewardreward}
          ></Image>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#fff",
    // backgroundColor: "#041c3c",
    // backgroundColor: "#0f0",
    // paddingTop: 50,
  },
  // Top area
  myPage: {
    backgroundColor: "#fff",
    flexDirection: "row",
    // marginLeft: 20,
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
    // fontWeight: "bold",
    marginTop: 20,
    marginLeft: 25,
    // color: "#034AA6",
    color: "#071c3c",
  },
  // Profile picture
  profile: {
    width: 100,
    height: 104,
    marginLeft: 34,
  },
  // king 부분 Container
  kingContainer: {
    backgroundColor: "#041c3c",
    // flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: -40,
    // paddingTop: 40,
    paddingVertical: 40,
    // bottom: 80,
    zIndex: 10,
  },
  kingGradient: {
    zIndex: 101,
    // height: 80,
    // zIndex: 50,
    height: 80,
    // marginTop: 34,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    // backgroundColor: "#fff",
    // borderColor: "#000",
    // borderWidth: 1,
    borderRadius: 25,
    marginHorizontal: 25,
    // marginVertical: 10,
  },
  kingGradientInner: {},
  king: {
    zIndex: 50,
    height: 80,
    // marginTop: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 25,
    marginHorizontal: 25,
    // marginVertical: 10,
  },
  // title text (like 인기왕, 걷기왕, 듣기왕)
  kingTitle: {
    fontSize: 23,
    color: "#000",
    marginLeft: 25,
  },
  // Badge Picture Container Style
  kingLogoCont: {
    alignItems: "left",
  },
  // Badge Picture Style
  kingLogo: {
    width: 70,
    height: 70,
  },
  // 1022C 같은 코드
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
  reward: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 40,
  },
  rewardLogo: {
    width: 23,
    height: 23,
    marginRight: 10,
  },
  rewardText: {
    color: "#000",
  },
  rewardreward: {
    color: "#ccc",
    width: 299,
    height: 23,
    marginRight: 10,
    margin: 13,
  },
  rewardLine: {
    marginHorizontal: 35,
    marginTop: -10,
    marginBottom: 10,
  },
  rewardLinePic: {
    width: 350,
    resizeMode: "center",
  },
});

export default MyPage;
