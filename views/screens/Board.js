import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  InputField,
} from "react-native";

const Board = ({ data }) => {
  const [value, onChangeText] = React.useState("Useless Multiline Placeholder");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../assets/boardWrite.png")}
          style={styles.image}
        />
        </View>
        <View>
          <Text>위치</Text>
          <Text>태그</Text>
          <Text>짧은 글</Text>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            style={styles.soft}
          />
        </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 4,
  },
  content: {},
  storyRow: {
    flexDirection: "row",
    marginTop: 13,
  },
  image: {
    width: 101,
    height: 179,
    marginTop: 30,
  },
  text:{

  },
  hard:{

  },
  soft: {
    width: 280,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOpacity: 0.5,
  },
});

export default Board;
