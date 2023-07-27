import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  ViroARScene,
  ViroText,
  ViroARSceneNavigator,
  Viro360Image,
  ViroImage,
} from "@viro-community/react-viro";
import { sceneNavigator } from "@viro-community/viro-react";
import Router_1 from "./Router_1";
const HelloWorldSceneAR = ({ navigation, props }) => {
  const handleClick = () => {
    props.sceneNavigator.push({ scene: Router_1 });
  };
  return (
    <ViroARScene>
      <ViroImage
        height={1}
        width={1}
        position={[0, 0, -3]}
        onClick={handleClick}
        source={require("../assets/mountain.png")}
      />
    </ViroARScene>
  );
};

const Router_2 = () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};
export default Router_2;

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
