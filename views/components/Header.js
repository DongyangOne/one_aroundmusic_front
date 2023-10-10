import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({onPress, onPressMain, onPressMusic}) => {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity onPress={onPressMain} style={styles.image}>
        <Image
          style={styles.home}
          source={require('../../assets/home.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={styles.image}>
        <Image
          style={styles.person}
          source={require('../../assets/myPage.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressMusic} style={styles.image}>
        <Image
          style={styles.person}
          source={require('../../assets/musicIcon.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#001C3E',
    height: 80,
    left: 0,
  right: 0,
  bottom: -10,
  flex:0.1,
  },
  image: {
    marginRight: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 10,
  },
  person: {
    width: 30,
    height: 30,
  },
  home:{
    width: 26,
    height: 26,
  }
});

export default Header;
