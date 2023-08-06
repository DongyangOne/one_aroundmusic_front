import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const FilterButton = ({title, color, textColor, onPress}) => {
  return (
    <TouchableOpacity
      style={[{backgroundColor: color}, styles.filterBtn]}
      onPress={onPress}
    >
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterBtn: {
    width: 60,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginRight: 11.06,
  },
  text: {
    fontSize: 15,
  },
});

export default FilterButton;
