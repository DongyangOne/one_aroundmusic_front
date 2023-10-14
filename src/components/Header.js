import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
  Pressable,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Black, Pink, White, Yellow } from '../constant/Color';
import SVGComponentMusic from './SVG/SVGComponentMusic';
import SVGComponentPerson from './SVG/SVGComponentPerson';
const Header = ({ onPress, onPressMain, onPressMusic }) => {
  return (
    <View style={styles.wrap}>
      <Pressable style={styles.titleBack} onPress={onPressMain}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Around Music</Text>
        </View>
      </Pressable>

      <View style={styles.icon}>
        <TouchableOpacity onPress={onPressMusic} style={styles.image}>
          <SVGComponentMusic />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={styles.image}>
          <SVGComponentPerson />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 60,
  },
  text: {
    color: Pink,
  },
  icon: {
    flexDirection: 'row',
    marginLeft: 'auto',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#001C3E',
    fontSize: 25,
    fontFamily: 'Yeongdeok-Sea',
    color: '#DE91A9',
  },
  titleBack: {
    marginLeft: '2%',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '2%',
    marginLeft: 10,
  },
});

export default Header;
