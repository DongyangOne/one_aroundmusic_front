import { Image, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const FriendsItem = ({ name, image, state }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image style={styles.profile} source={image}></Image>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>{state}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 19,
    marginTop: 19,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontSize: 17,
    marginLeft: 18,
    color: "#484848",
    fontWeight: "bold",
  },
  btn: {
    width: 100,
    height: 30,
    backgroundColor: "#001C3E",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 12,
  },
});

export default FriendsItem;
