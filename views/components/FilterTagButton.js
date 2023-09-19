import {StyleSheet, Text, TouchableOpacity} from 'react-native';


const FilterTagButton = ({title, color, textColor}) => {
  return (
    <TouchableOpacity
      style={[{backgroundColor: color}, styles.filterBtn]}

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
    marginLeft:6,
    marginTop:5,
    backgroundColor:"#2F4560"
  },
  text: {
    fontSize: 15,
  },
});
export default FilterTagButton;