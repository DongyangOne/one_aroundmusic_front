import React from 'react';
import View from 'react-native';
import { Button, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import Swiper from 'react-native-swiper';
import Main from './views/screens/Main';
import Map from './views/screens/Map';
import Music from './views/screens/Music';
import FilterScreen from './views/screens/FilterScreen';
import ArScreen from './views/screens/ArScreen';
import ArScreen1 from './views/screens/ArScreen1';
import MyPage from './views/screens/MyPage';
import PopularKing from './views/screens/PopularKing';
import ListenKing from './views/screens/ListenKing';
import WKing from './views/screens/WKing';
import FriendList from './views/screens/FriendList';
import Board from './views/screens/Board';
import Header from './views/components/Header';
import MusicPlay from './views/screens/MusicPlay';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartingPage from './views/screens/StartingPage';
import { Linking } from 'react-native';

const Stack = createStackNavigator();

const linking = {
  prefixes: ['awesomeproject://'], // 여기에 앱의 URL 스키마를 추가합니다.
  config: {
    screens: {
      Main: 'main',
      Mypage: 'mypage',
    },
  },
};

export default () => (
  <SafeAreaView>
    <StartingPage/>
  </SafeAreaView>
);
// const styles = {

// };
