import React, { useState } from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
const PopularKing = ({ navigation }) => {
  const [images, setImages] = useState([
    require("../../assets/border1.png"),
    require("../../assets/border2.png"),
    require("../../assets/border3.png"),
  ]);
  const [abc, setAbc] = useState([
    require("../../assets/ward1.png"),
    require("../../assets/ward2.png"),
    require("../../assets/ward3.png"),
  ]);
  const imageStyles = [
    {
      width: 80,
      height: 80,
      marginTop: "25%",
      marginLeft: 20,
    }, // 스타일1
    {
      width: 150,
      height: 150,
      marginTop: "27%",
      marginLeft: 18,
      alignItems: "center",
    }, // 스타일2
    { width: 80, height: 80, marginTop: "25%", marginLeft: 15 }, // 스타일3
  ];
  const handleLeftImageClick = () => {
    // 첫 번째 이미지를 클릭하면 배열의 마지막 요소를 배열의 맨 앞으로 이동
    setImages(prevImages => [prevImages.pop(), ...prevImages]);
    setAbc(prevImages => [prevImages.pop(), ...prevImages]);
  };

  const handleRightImageClick = () => {
    // 마지막 이미지를 클릭하면 배열의 첫 번째 요소를 배열의 맨 뒤로 이동
    setImages(prevImages => [...prevImages.slice(1), prevImages[0]]);
    setAbc(prevImages => [...prevImages.slice(1), prevImages[0]]);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image style={styles.LogoMain} source={abc[1]} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.serve}>
        <TouchableOpacity onPress={handleLeftImageClick}>
          <Image style={imageStyles[0]} source={images[0]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={imageStyles[1]} source={images[1]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRightImageClick}>
          <Image style={imageStyles[2]} source={images[2]} />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleGoBack}>
        <Text style={styles.buttonText}>적용하기</Text>
      </TouchableOpacity>
    </>
  );
};
export default PopularKing;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: "30%",
  },
  LogoMain: {
    width: 180,
    height: 180,
  },
  serve: {
    flexDirection: "row",
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
