import React from "react";
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from "react-native";
import Header from "../components/Header";
const Mypage = ({ navigation }) => {
  return (
    <View style={styles.contain}>
      <View style={styles.myPage}>
        <View>
          <View style={styles.friendBtn}>
            <Text style={styles.text}>내 친구 1,004</Text>
          </View>
          <Text style={styles.id}>MiRae23</Text>
        </View>
        <Image
          source={require("../../assets/profile.png")}
          style={styles.profile}
        />
      </View>
      <View style={styles.king}>
        <Image
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
        ></Image>
      </View>
      <View style={styles.reward}>
        <Image
          source={require("../../assets/reward1.png")}
          style={styles.rewardreward}
        ></Image>
        <Image
          source={require("../../assets/reward2.png")}
          style={styles.rewardreward}
        ></Image>
        <Image
          source={require("../../assets/reward3.png")}
          style={styles.rewardreward}
        ></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: "#FFFF",
  },
  myPage: {
    flexDirection: "row",
  },
  friendBtn: {
    width: 146,
    height: 27,
    marginTop: 17,
    marginLeft: 0,
    borderColor: "#034AA6",
    borderWidth: 1,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 88,
    marginLeft: 56,
  },
  text: {
    fontSize: 12,
    color: "#034AA6",
  },
  id: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 58,
    marginTop: 11,
    color: "#034AA6",
  },
  profile: {
    width: 100,
    height: 104,
    marginTop: 49,
    marginLeft: 34,
  },
  king: {
    marginTop: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  kingking: {
    width: 96,
    height: 155,
    margin: 7,
  },
  reward: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  rewardreward: {
    width: 299,
    height: 23,
    margin: 13,
  },
});

export default Mypage;
