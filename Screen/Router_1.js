import React from "react";
import { Button, View, TouchableOpacity, Image } from "react-native";

function Router_1({ navigation }) {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("two")}>
          <Image
            style={{ width: 25, height: 25, margin: 3 }}
            source={require("../assets/upload.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{ width: 300, height: 300, marginTop: 600 }}
          source={require("../assets/mountain.png")}
        />
      </View>
    </View>
  );
}
export default Router_1;
