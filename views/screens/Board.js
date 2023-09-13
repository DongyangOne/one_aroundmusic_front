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
  const [value, onChangeText] = React.useState(
    "봄 바람을 맞으면서 기분이 산뜻해졌다."
  );
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
          onChangeText={(text) => onChangeText(text)}
          value={value}
          style={styles.soft}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("NotMain")}
        >
          <Text style={styles.buttonText}>업로드하기</Text>
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
    width: 350,
    height: 100,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOpacity: 0.5,
    backgroundColor: "white",
    color: "#B2B2B2",
    borderRadius: 20,
    textAlignVertical: "top",
  },
  soft1: {
    width: 350,
    height: 38,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOpacity: 0.5,
    backgroundColor: "white",
    borderRadius: 15,
    textAlignVertical: "top",
  },
  btnContainer: {
    alignItems: "center",
  },
  button: {
    width: 380,
    height: 50,
    backgroundColor: "#0A0A2A",
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginHorizontal: 20,
    alignItems: "center",
    marginTop: "45%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "1%",
  },
});

export default Board;
