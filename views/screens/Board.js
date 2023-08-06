import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  InputField,
  TouchableOpacity,
} from "react-native";

const Board = ({ data, navigation }) => {
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
        <Text style={styles.text}>위치</Text>
        <TextInput
          style={styles.soft1}
          placeholder="서울시 구로구 고척동 234-5"
          placeholderTextColor="#B2B2B2"
        ></TextInput>
        <Text style={styles.text}>태그</Text>
        <TextInput
          style={styles.soft1}
          placeholder="#10대  #봄   #산뜻하다"
          placeholderTextColor="#B2B2B2"
        ></TextInput>
        <Text style={styles.text}>짧은 글</Text>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={styles.soft}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("NotMain")}
        >
          <Text style={styles.buttonText}>적용하기</Text>
        </TouchableOpacity>
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
  text: {
    color: "#034AA6",
  },
  hard: {},
  soft: {
    width: 280,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOpacity: 0.5,
    backgroundColor: "white",
    color: "#B2B2B2",
    borderRadius: 10,
    textAlignVertical: "top",
  },
  soft1: {
    width: 280,
    height: 38,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOpacity: 0.5,
    backgroundColor: "white",
    borderRadius: 10,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#034AA6",
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 30,
    alignItems: "center",
    marginTop: "30%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Board;
