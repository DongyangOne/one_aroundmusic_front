import React from "react";
import { Button, View, Text } from "react-native";

function Router_1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to AR"
        onPress={() => navigation.navigate("two")} 
      />
    </View>
  );
}
export default Router_1;
