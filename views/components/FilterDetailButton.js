import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
const FilterDetailButton = ({ title }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handlePress = () => {
    setIsClicked(prevIsClicked => !prevIsClicked);
  };
  return (
    <TouchableOpacity
      style={[styles.filterBtn, isClicked ? styles.clickedButton : null]}
      onPress={handlePress}
    >
      <Text style={[styles.text, isClicked ? styles.clickText : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterBtn: {
    backgroundColor: "#ffffff",
    width: 70,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    flexDirection: "row",
  },
  text: {
    fontSize: 15,
    color: "#656565",
  },
  clickText: {
    fontSize: 15,
    color: "#ffffff",
  },
  clickedButton: {
    backgroundColor: "#034AA6",
  },
});

export default FilterDetailButton;
