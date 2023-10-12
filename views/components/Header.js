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

const Header = ({ onPress, onPressMain, onPressMusic }) => {
  return (
    <View style={styles.wrap}>
      <Pressable style={styles.titleBack} onPress={onPressMain}>
        <Text style={styles.title}>Around Music</Text>
      </Pressable>

      <View style={styles.icon}>
        <TouchableOpacity onPress={onPressMusic} style={styles.image}>
          <Image
            style={styles.music}
            source={require('../../assets/musicIcon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={styles.image}>
          <Image
            style={styles.person}
            source={require('../../assets/myPage.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    //justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#001C3E',
    height: 60,
  },
  icon: {
    flexDirection: 'row',
    //justifyContent: 'flex-end',
    height: 60,
    backgroundColor: '#001C3E',
    marginLeft: '35%',
  },
  title: {
    color: 'white',
    fontSize: 25,
    marginLeft: '4%',
    marginTop: '2%',
    fontFamily: 'Yeongdeok-Sea',
  },
  titleBack: {
    marginLeft: '2%',
    marginTop: '2%',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
    marginRight: '5%',
  },
  person: {
    width: 35,
    height: 35,
    marginTop: '10%',
  },
  music: {
    width: 30,
    height: 30,
    marginTop: '38%',
    marginRight: '2%',
  },
});

export default Header;
