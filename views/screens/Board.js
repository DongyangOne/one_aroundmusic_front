import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Button,
  InputField,
  TouchableOpacity,
} from "react-native";
import ImagePicker from "react-native-image-picker";

const Board = ({ data, navigation }) => {
  const [value, onChangeText] = React.useState("Useless Multiline Placeholder");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePicker = () => {
    const options = {
      title: "Select Image",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("사용자가 이미지를 취소");
      } else if (response.error) {
        console.log("이미지 에러: ", response.error);
      } else {
        const source = { uri: response.uri };
        //서버로 이미지를 받아야돼서 프론트인 제가...어쩔 수 없었어요
        // 이제 선택한 이미지를 서버로 업로드할 수 있습니다.
        // 여기서 서버로 업로드하는 로직을 추가해야 합니다.

        setSelectedImage(source);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../assets/boardWrite.png")}
          style={styles.image}
        />
      </View>
      {/* <View>
        {selectedImage && (
          <Image source={selectedImage} style={{ width: 200, height: 200 }} />
        )}
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={handleImagePicker}
        >
          <Text style={styles.uploadButtonText}>이미지 업로드</Text>
        </TouchableOpacity>
      </View> */}

      <View style={styles.inputContainer}>
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
      <View style={styles.BtnBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ListenKing")}
        >
          <Text style={styles.buttonText}>업로드하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  BtnBox: { marginTop: "40%" },
  container: {
    alignItems: "center",
    marginTop: 4,
  },
  content: {
    marginBottom: 10,
  },
  // uploadButton: {
  //   width: 150,
  //   height: 40,
  //   backgroundColor: "white",
  //   borderRadius: 10,
  //   padding: 10, // Padding 설정
  //   alignItems: "center", // 가운데 정렬
  //   marginTop: 5, // 버튼과 이미지 사이의 간격 조절
  // },
  // uploadButtonText: {
  //   color: "#001C3E",
  //   fontSize: 16,
  //   fontWeight: "bold",
  // },
  storyRow: {
    flexDirection: "row",
    marginTop: 13,
  },
  image: {
    width: 130,
    height: 179,
    marginTop: 30,
  },
  text: {
    color: "#001C3E",
  },
  hard: {},
  soft: {
    width: 320,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOpacity: 0.5,
    backgroundColor: "white",
    color: "#B2B2B2",
    borderRadius: 10,
    textAlignVertical: "top",
  },
  soft1: {
    marginBottom: 7,
    width: 320,
    height: 40,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOpacity: 0.5,
    backgroundColor: "white",
    borderRadius: 10,
    textAlignVertical: "top",
  },
  button: {
    alignSelf: "flex-end",
    width: 330,
    backgroundColor: "#001C3E",
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Board;
