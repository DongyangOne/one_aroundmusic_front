import { SafeAreaView, Image, StyleSheet, Text, View, ScrollView } from "react-native";

const SongList = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.musicBox}>
         <Image source={props.song[0].image} style={{width:100, height:100}}></Image>
         <Text style={styles.text}>{props.song[0].title}</Text>
         <Text style={styles.text}>{props.song[0].singer}</Text>
         <Image style={{ width: 25, height: 30 }} source={require("../../assets/playButton.png")} />
      </View>
      <View style={styles.musicBox}>
         <Image source={props.song[1].image} style={{width:100, height:100}}></Image>
         <Text style={styles.text}>{props.song[1].title}</Text>
         <Text style={styles.text}>{props.song[1].singer}</Text>
         <Image style={{ width: 25, height: 30 }} source={require("../../assets/playButton.png")} />
      </View>
      <View style={styles.musicBox}>
         <Image source={props.song[2].image} style={{width:100, height:100}}></Image>
         <Text style={styles.text}>{props.song[2].title}</Text>
         <Text style={styles.text}>{props.song[2].singer}</Text>
         <Image style={{ width: 25, height: 30 }} source={require("../../assets/playButton.png")} />
      </View>
      <View style={styles.musicBox}>
         <Image source={props.song[3].image} style={{width:100, height:100}}></Image>
         <Text style={styles.text}>{props.song[3].title}</Text>
         <Text style={styles.text}>{props.song[3].singer}</Text>
         <Image style={{ width: 25, height: 30 }} source={require("../../assets/playButton.png")} />
      </View>
      <View style={styles.musicBox}>
         <Image source={props.song[4].image} style={{width:100, height:100}}></Image>
         <Text style={styles.text}>{props.song[4].title}</Text>
         <Text style={styles.text}>{props.song[4].singer}</Text>
         <Image style={{ width: 25, height: 30 }} source={require("../../assets/playButton.png")} />
      </View>
      <View style={styles.musicBox}>
         <Image source={props.song[5].image} style={{width:100, height:100}}></Image>
         <Text style={styles.text}>{props.song[5].title}</Text>
         <Text style={styles.text}>{props.song[5].singer}</Text>
         <Image style={{ width: 25, height: 30 }} source={require("../../assets/playButton.png")} />
      </View>
      <View style={styles.musicBox}>
         <Image source={props.song[6].image} style={{width:100, height:100}}></Image>
         <Text style={styles.text}>{props.song[6].title}</Text>
         <Text style={styles.text}>{props.song[6].singer}</Text>
         <Image style={{ width: 25, height: 30 }} source={require("../../assets/playButton.png")} />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginHorizontal: 10,
    flex: 1,
    backgroundColor: "#001C3E",
    // marginLeft: 40,
    // marginTop: 15,
    // marginRight: 25,
    // elevation: 10,
  },
  musicBox: {
    flex: 1,
    margin: 10,
    flexDirection: "row",
    backgroundColor: "#001C3E",
  },
  image: {
    width: 100,
    height: 100,
    left: -40,
  },
  play: {
    backgroundColor: "#001C3E",
    textAlign: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    textAlign: "center",
    justifyContent: "center",
    color: 'white',
    padding:5,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  singerName: {
    fontSize: 12,
    color: "#D0D0D0",
  },
});

export default SongList;
