import React, { useState } from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";

const RoundedShadowBox = ({ children }) => {
  return (
    <View style={styles.roundedShadowBox}>
      {children}
    </View>
  );
};

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
      marginTop: "50%",
      marginRight: 35,
    }, // 스타일1
    {
      width: 150,
      height: 150,
      marginTop: "15%",
      alignItems: "center",
    }, // 스타일2
    { width: 80, height: 80, marginTop: "50%", marginLeft: 35 }, // 스타일3
  ];

  const handleLeftImageClick = () => {
    setImages(prevImages => [prevImages.pop(), ...prevImages]);
    setAbc(prevImages => [prevImages.pop(), ...prevImages]);
  };

  const handleRightImageClick = () => {
    setImages(prevImages => [...prevImages.slice(1), prevImages[0]]);
    setAbc(prevImages => [...prevImages.slice(1), prevImages[0]]);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.centeredContainer}>
        <Image style={styles.LogoMain} source={abc[1]} />
      </View>

      <RoundedShadowBox>
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
      </RoundedShadowBox>
      <TouchableOpacity style={styles.button} onPress={handleGoBack}>
        <Text style={styles.buttonText}>적용하기</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: "30%",
  },
  LogoMain: {
    marginTop: 100,
    marginBottom: 50,
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  serve: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#000080",
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
  centeredContainer: {
    alignItems: "center",
  },
  centeredImage: {
    width: 60,
    height: 60,
  },
  roundedShadowBox: {
    width: 320,
    marginLeft: 50,
    marginTop: 30,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    padding: 10,
    margin: 10,
  },
});

export default PopularKing;
