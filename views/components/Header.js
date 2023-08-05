import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";

const Header = () => {
  return (
    <Image source={require("../../assets/myPage.png")} style={styles.image} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 34,
    height: 34,
    marginTop: 17,
    marginLeft: 311,
  },
});

export default Header;
