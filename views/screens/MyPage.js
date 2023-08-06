import React from "react";
import { Button, Text } from "react-native";
import Header from "../components/Header";
const Mypage = ({ navigation }) => {
  return (
    <Button
      title="dkssud"
      onPress={() => navigation.navigate("PopularKing")}
    ></Button>
  );
};
export default Mypage;
