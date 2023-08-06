import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

const Header = (navigation) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ArScreen")}>
      <Image source={require("../../assets/myPage.png")} style={styles.image} />
    </TouchableOpacity>
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
