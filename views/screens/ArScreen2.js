import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  ViroARScene,
  ViroImage,
  ViroARSceneNavigator,
} from "@viro-community/react-viro";

const WorldSceneAR = () => {
  return (
    <ViroARScene>
      <ViroImage
        height={0.5}
        width={0.5}
        position={[0, 0.5, -1.5]}
        placeholderSource={require("../../assets/music3.png")}
        source={require("../../assets/music3.png")}
      />
      <ViroImage
        height={0.2}
        width={0.2}
        position={[0, 0.13, -1.5]}
        placeholderSource={require("../../assets/play.png")}
        source={require("../../assets/play.png")}
      />
    </ViroARScene>
  );
};

export default Arscreen2 = ({ navigation }) => {
  return (
    <View style={styles.f1}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: WorldSceneAR,
        }}
        style={styles.f1}
      />
      <View style={styles.con}>
        <TouchableOpacity onPress={() => navigation.navigate("Board")}>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/Bottom.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
var styles = StyleSheet.create({
  f1: { flex: 1 },
  con: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  tinyLogo: {
    width: 200,
    height: 90,
  },
});
