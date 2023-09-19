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
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.wrap} onPress={onPress}>
      <View style={styles.image}>
        <Image source={require('../../assets/myPage1.png')} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#001C3E',
    height: 60,
  },
  image: {
    marginRight: 18,
  },
});

export default Header;
