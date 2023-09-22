import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = ({ onPress }) => {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity onPress={onPress} style={styles.image}>
        <Image source={require("../../assets/myPage.png")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#001C3E",
    height: 60,
  },
  image: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginRight: 10,
  },
});

export default Header;
