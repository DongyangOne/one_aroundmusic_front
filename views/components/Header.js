import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.view}>
      <Image source={require("../../assets/myPage.png")} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#001C3E",
    height :70
  },
  view:{
    flexDirection:"column",
    alignItems:'flex-end',
    justifyContent:'center'
  },
  image: {
    width: 30,
    height: 30,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    marginRight:10

  },
});

export default Header;
