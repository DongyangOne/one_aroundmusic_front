<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';
=======
// import React, { useState } from "react";
// import { StyleSheet } from "react-native";
// import {
//   ViroARScene,
//   ViroText,
//   ViroConstants,
//   ViroARSceneNavigator,
// } from "@viro-community/react-viro";
>>>>>>> Stashed changes

// import { View, Text, Image, ScrollView, TextInput, Button } from "react-native";
// import HomeScreen from "./View/screens/HomeScreen";
// const HelloWorldSceneAR = () => {
//   const [text, setText] = useState("Initializing AR...");

//   function onInitialized(state, reason) {
//     console.log("guncelleme", state, reason);
//     setText("Hello World!");
//   }

//   return (
//     <ViroARScene onTrackingUpdated={onInitialized}>
//       <ViroText
//         text={text}
//         scale={[0.5, 0.5, 0.5]}
//         position={[0, 0, -1]}
//         onClick={HelloSceneAR}
//         style={styles.helloWorldTextStyle}
//       />
//     </ViroARScene>
//   );
// };
// // const HelloSceneAR = () => {
// //   const [text, setText] = useState("Initializing AR...");

// //   function onInitialized(state, reason) {
// //     console.log("guncelleme", state, reason);
// //     setText("World!");
// //   }

// //   return (
// //     <ViroARScene onTrackingUpdated={onInitialized}>
// //       <ViroText
// //         text={text}
// //         scale={[0.5, 0.5, 0.5]}
// //         position={[0, 0, -1]}
// //         onClick={HomeScreen}
// //         style={styles.helloWorldTextStyle}
// //       />
// //     </ViroARScene>
// //   );
// // };

// const App = () => {
//   return (
//     <ScrollView>
//       <Text>Some text</Text>
//       <View>
//         <Text>Some more text</Text>
//         <Image
//           source={{
//             uri: "https://reactnative.dev/docs/assets/p_cat2.png",
//           }}
//           style={{ width: 200, height: 200 }}
//         />
//       </View>

//       {/* <Button title="hi" onPress={}/> */}
//       <Button title="hi" onPress={HomeScreen} />
//     </ScrollView>
//   );
// };

// var styles = StyleSheet.create({
//   f1: { flex: 1 },
//   helloWorldTextStyle: {
//     fontFamily: "Arial",
//     fontSize: 30,
//     color: "#ffffff",
//     textAlignVertical: "center",
//     textAlign: "center",
//   },
// });
// export default App;
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
/* routing screen */
import Router_1 from "./Screen/Router_1";
import Router_2 from "./Screen/Router_2";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="one">
        <Stack.Screen name="one" component={Router_1} />
        <Stack.Screen name="two" component={Router_2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
<<<<<<< Updated upstream
};

export default () => {
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

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
=======
// import React, { useState } from "react";
// import { StyleSheet } from "react-native";
// import {
//   ViroARScene,
//   ViroText,
//   ViroConstants,
//   ViroARSceneNavigator,
// } from "@viro-community/react-viro";

// import { View, Text, Image, ScrollView, TextInput, Button } from "react-native";
// import HomeScreen from "./View/screens/HomeScreen";
// const HelloWorldSceneAR = () => {
//   const [text, setText] = useState("Initializing AR...");

//   function onInitialized(state, reason) {
//     console.log("guncelleme", state, reason);
//     setText("Hello World!");
//   }

//   return (
//     <ViroARScene onTrackingUpdated={onInitialized}>
//       <ViroText
//         text={text}
//         scale={[0.5, 0.5, 0.5]}
//         position={[0, 0, -1]}
//         onClick={HelloSceneAR}
//         style={styles.helloWorldTextStyle}
//       />
//     </ViroARScene>
//   );
// };
// // const HelloSceneAR = () => {
// //   const [text, setText] = useState("Initializing AR...");

// //   function onInitialized(state, reason) {
// //     console.log("guncelleme", state, reason);
// //     setText("World!");
// //   }

// //   return (
// //     <ViroARScene onTrackingUpdated={onInitialized}>
// //       <ViroText
// //         text={text}
// //         scale={[0.5, 0.5, 0.5]}
// //         position={[0, 0, -1]}
// //         onClick={HomeScreen}
// //         style={styles.helloWorldTextStyle}
// //       />
// //     </ViroARScene>
// //   );
// // };

// const App = () => {
//   return (
//     <ScrollView>
//       <Text>Some text</Text>
//       <View>
//         <Text>Some more text</Text>
//         <Image
//           source={{
//             uri: "https://reactnative.dev/docs/assets/p_cat2.png",
//           }}
//           style={{ width: 200, height: 200 }}
//         />
//       </View>

//       {/* <Button title="hi" onPress={}/> */}
//       <Button title="hi" onPress={HomeScreen} />
//     </ScrollView>
//   );
// };

// var styles = StyleSheet.create({
//   f1: { flex: 1 },
//   helloWorldTextStyle: {
//     fontFamily: "Arial",
//     fontSize: 30,
//     color: "#ffffff",
//     textAlignVertical: "center",
//     textAlign: "center",
//   },
// });
// export default App;
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
/* routing screen */
import Router_1 from "./Screen/Router_1";
import Router_2 from "./Screen/Router_2";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="one" component={Router_1} />
        <Stack.Screen name="two" component={Router_2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
>>>>>>> Stashed changes
=======
}
>>>>>>> Stashed changes
