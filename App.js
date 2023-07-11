import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
  Viro3DObject,
  ViroAmbientLight,
} from "@viro-community/react-viro";

const initialScene = props => {
  let data = props.sceneNavigator.viroAppProps;
  ViroMaterials.createMaterials({
    wolf: {
      diffuseTexture: require("./assets/obj/textures/Wolf_Body.jpg"),
    },
    skull: {
      diffuseTexture: require("./assets/Skull/Skull.jpg"),
    },
  });

  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {
        rotateX: "+=90",
      },
    },
    rotate1: {
      duration: 2500,
      properties: {
        rotateY: "+=90",
      },
    },
  });
  return (
    <ViroARScene>
      {/* <ViroText
        text={"helloworld"}
        position={[1, -1, -2]}
        styles={{ fontSize: "30" }}
  /> */}
      {/* <ViroBox
        height={1}
        length={2}
        width={1}
        scale={[0.5, 0.5, 0.5]}
        position={[1, -1, -2]}
        materials={["dog"]}
        animation={{ name: "rotate", loop: true, run: true }}
      /> */}
      <ViroAmbientLight color="#ffffff" />
      {data.object === "skull" ? (
        <Viro3DObject
          source={require("./assets/Skull/Skull.obj")}
          position={[0, 0, -4]}
          scale={[0.08, 0.08, 0.08]}
          rotation={[-90, 0, 0]}
          materials={"skull"}
          animation={{ name: "rotate1", loop: true, run: true }}
          type="OBJ"
        />
      ) : (
        <Viro3DObject
          source={require("./assets/obj/Wolf.obj")}
          position={[0, -1, -2]}
          scale={[2, 2, 2]}
          rotation={[0, 50, 0]}
          materials={"wolf"}
          animation={{ name: "rotate1", loop: true, run: true }}
          type="OBJ"
        />
      )}
    </ViroARScene>
  );
};
export default () => {
  const [object, setObject] = useState("skull");
  return (
    <View style={styles.mainView}>
      <ViroARSceneNavigator
        initialScene={{
          scene: initialScene,
        }}
        viroAppProps={{ object: object }}
        style={{ flex: 1 }}
      />
      <View style={styles.controlsView}>
        <TouchableOpacity onPress={() => setObject("skull")}>
          <Text style={styles.text}>display skull </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setObject("wolf")}>
          <Text style={styles.text}>display wolf</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  mainView: { flex: 1 },
  controlsView: {
    width: "100%",
    height: 100,
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    margin: 15,
    backgroundColor: "#9d9d9d",
    color: "black",
    padding: 10,
    fontWeight: "bold",
  },
});
