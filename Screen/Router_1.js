<<<<<<< Updated upstream
import React from "react";
import { Button } from "react-native";

const Router_1 = () => {
  return (
    <Container>
      <StyledText>Home</StyledText>
      <Button title="go to the list screen" />
    </Container>
  );
};

=======
import React, { useState } from "react";
import { Button, View, Text } from "react-native";

function Router_1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to AR"
        onPress={() => navigation.navigate("two")} // Details로 화면 이동
      />
    </View>
  );

  // <ViroARSceneNavigator
  //   autofocus={true}
  //   initialScene={{
  //     scene: HelloWorldSceneAR,
  //   }}
  //   style={styles.f2}
  // />
}
>>>>>>> Stashed changes
export default Router_1;
