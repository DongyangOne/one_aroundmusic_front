import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";

const Listening = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.back}>
        <ImageBackground
          source={require("../../assets/album.png")}
          style={styles.album1}
          blurRadius={10}
        >
          <ImageBackground style={styles.albumItem}>
            <Image
              source={require("../../assets/album2.png")}
              style={styles.album2}
            />
            <Text style={styles.title}>봄봄봄</Text>
            <Text style={styles.singer}>로이킴</Text>
            <Image
              source={require("../../assets/streaming.png")}
              style={styles.stream}
            />
            <Image
              source={require("../../assets/playBtn.png")}
              style={styles.play}
            />
            <TouchableOpacity onPress={() => navigation.navigate("ArScreen")}>
              <Image
                source={require("../../assets/share.png")}
                style={styles.share}
              />
            </TouchableOpacity>
          </ImageBackground>
        </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  back: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
  },
  albumItem: {
    flex: 1,
    alignItems: "center",
  },
  album1: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 400,
    height: 800,
    resizeMode: "cover",
  },
  album2: {
    width: 206,
    height: 206,
    marginTop: 114,
  },
  title: {
    fontSize: 24,
    fontStyle: "bold",
    color: "white",
    marginTop: 31,
  },
  singer: {
    fontSize: 13,
    fontWeight: "light",
    color: "white",
    marginTop: 12,
  },
  stream: {
    width: 350,
    height: 13,
    marginTop: 51,
  },
  play: {
    width: 180,
    height: 36,
    marginTop: 30,
  },
  share: {
    width: 251,
    height: 35,
    borderRadius: 5,
    marginTop: 50,
  },
});

export default Listening;
