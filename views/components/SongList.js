import { Image, StyleSheet, Text, View } from "react-native";

const SongList = ({ title, image, singer, date }) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.singer}>{singer}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {},
  container: {
    flexDirection: "row",
    marginHorizontal: 7,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    marginLeft: 17,
    marginTop: 17,
  },
  title: {
    fontSize: 17,
    color: "#034AA6",
    fontWeight: "bold",
  },
  singer: {
    fontSize: 12,
    color: "#D0D0D0",
  },
  date: {
    fontSize: 10,
    color: "#D0D0D0",
  },
  line: {
    height: 1,
    width: 370,
    backgroundColor: "#034AA6",
    marginVertical: 15,
  },
});

export default SongList;
