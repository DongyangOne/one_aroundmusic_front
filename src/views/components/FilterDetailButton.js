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
    width: 65,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft:2,
    flexDirection: "row",
  },
  text: {
    fontSize: 14,
    color: "#656565",
  },
  clickText: {
    fontSize: 14,
    color: "#ffffff",
  },
  clickedButton: {
    backgroundColor: "#001C3E",
  },
});

export default FilterDetailButton;
