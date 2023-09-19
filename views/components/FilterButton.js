import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FilterButton = ({ title, color, textColor, onPress }) => {
  return (
    <TouchableOpacity
      style={[{ backgroundColor: color }, styles.filterBtn]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterBtn: {
    width: 60,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginLeft: 6,
    marginTop: 2,
    backgroundColor: "#F2F3F6",
  },
  text: {
    fontSize: 15,
  },
});

export default FilterButton;
