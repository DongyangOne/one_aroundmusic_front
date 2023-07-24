import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  ViroARScene,
  ViroText,
  ViroARSceneNavigator,
} from "@viro-community/react-viro";

const HelloWorldSceneAR = ({ navigation }) => {
  const [text, setText] = useState("Initializing AR...");
  const onPress = () => navigation.navigate("one");
  function onInitialized(state, reason) {
    console.log("guncelleme", state, reason);
    setText("Hello World!");
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        onClick={onPress}
        style={styles.helloWorldTextStyle}
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
