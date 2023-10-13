import React, { useState } from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RoundedShadowBox = ({ children }) => {
  return <View style={styles.roundedShadowBox}>{children}</View>;
};
//이 더미데이터를 Map에 이동 -> Marker로 이동해서 바뀌게 해야함
//navigation오류 같음
export const ImgData = [
  { id: 1, src: require("../../assets/workReward1.png") },
  { id: 2, src: require("../../assets/workReward2.png") },
  { id: 3, src: require("../../assets/workReward3.png") },
];

const WKing = () => {
  const navigation = useNavigation();
  const [selection, setSelection] = useState(1); // 초기에 중간 이미지를 보여주기 위한 인덱스

  const [images, setImages] = useState([
    require("../../assets/workReward1.png"),
    require("../../assets/workReward2.png"),
    require("../../assets/workReward3.png"),
  ]);

  const [abc, setAbc] = useState([
    require("../../assets/workReward1.png"),
    require("../../assets/workReward2.png"),
    require("../../assets/workReward3.png"),
  ]);

  const SCROLL_SET = (dir) => {
    let temp = selection;
    if (dir == "r") {
      temp++;
      if (temp > 2) temp = 0;
    } else if (dir == "l") {
      temp--;
    } else {
      console.log("dir: ${dir}. 에러 발생");
      return;
    }
    setSelection(temp);
  };

  const handleLeftImageClick = () => {
    setImages((prevImages) => [prevImages.pop(), ...prevImages]);
    setAbc((prevImages) => [prevImages.pop(), ...prevImages]);
    SCROLL_SET("l");
  };

  const handleRightImageClick = () => {
    setImages((prevImages) => [...prevImages.slice(1), prevImages[0]]);
    setAbc((prevImages) => [...prevImages.slice(1), prevImages[0]]);
    SCROLL_SET("r");
  };

  const handleActionClick = () => {
    navigation.navigate("Map", {
      setData: selection,
    });

    alert("적용되었습니다.");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>
        <Image style={styles.LogoMain} source={abc[1]} />
      </View>

      <View style={styles.centeredContainer}></View>
      <RoundedShadowBox>
        <TouchableOpacity style={styles.serve}>
          <TouchableOpacity onPress={handleLeftImageClick}>
            <Image style={imageStyles[0]} source={images[0]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRightImageClick}>
            <Image style={imageStyles[1]} source={images[1]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRightImageClick}>
            <Image style={imageStyles[2]} source={images[2]} />
          </TouchableOpacity>
        </TouchableOpacity>
      </RoundedShadowBox>
      {/* <View style={styles.btnBox}> */}
      <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleActionClick(selection);
          }}
        >
          <Text style={styles.buttonText}>적용하기</Text>
        </TouchableOpacity>
      {/* </View> */}
    </SafeAreaView>
  );
};

const imageStyles = [
  {
    width: 80,
    height: 80,
    marginTop: "50%",
    marginRight: 35,
  }, 
  {
    width: 150,
    height: 150,
    marginTop: "10%",
    alignItems: "center",
  },
  { width: 80, height: 80, marginTop: "50%", marginLeft: 35 }, // 스타일3
];

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  LogoMain: {
    marginTop: "20%",
    marginBottom: 50,
    width: 150,
    height: 150,
  },
  serve: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#000080",
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: "center",
    marginTop: "20%",
    width: "85%"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  centeredContainer: {
  },
  centeredImage: {
    width: 60,
    height: 60,
  },
  roundedShadowBox: {
    width: 320,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    alignItems:'center',
  },
});
export default WKing;
