// ** React Imports
import React, { useEffect, useState } from 'react';

// ** RN Imports
import { StyleSheet, SafeAreaView, View } from 'react-native';

// ** Utils Imports
import { ScrollView } from 'react-native-virtualized-view';
import { useAuth, useSwipe } from '../context/AuthContext';

// ** Component Imports
import Header from '../components/Header';
import MainStory from '../components/MainStory';
import Contents from '../components/Contents';

// ** Constant Imports
import { Pink } from '../constant/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { url } from '../constant/Url';

export const DATA = [
  {
    id: '또치',
    src: require('../../assets/111.jpeg'),
    story: require('../../assets/contents1.jpeg'),
  },
  {
    id: '이지금',
    src: require('../../assets/222.jpeg'),
    story: require('../../assets/contents2.jpeg'),
  },
  {
    id: 'jung',
    src: require('../../assets/333.jpeg'),
    story: require('../../assets/contents3.jpeg'),
  },
  {
    id: 'jin',
    src: require('../../assets/444.jpeg'),
  },
  {
    id: 'yong',
    src: require('../../assets/555.jpeg'),
  },
  {
    id: 'yong',
    src: require('../../assets/555.jpeg'),
  },
  {
    id: 'yong',
    src: require('../../assets/555.jpeg'),
  },
  {
    id: 'yong',
    src: require('../../assets/555.jpeg'),
  },
  {
    id: 'yong',
    src: require('../../assets/555.jpeg'),
  },
  {
    id: 'yong',
    src: require('../../assets/555.jpeg'),
  },
];

const Main = ({ navigation, route }) => {
  const { open, setOpen } = useAuth(false);
  const { swipe, setSwipe } = useSwipe(false);

  //스포티파이 토큰을 받아옴
  const getSpotifyToken = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    console.log(token);
    axios
      .get(`${url}/api/reward/token`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(async response => {
        await AsyncStorage.setItem('token', response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  //스포티파이 토큰 받아오는 함수 호출
  getSpotifyToken();

  useEffect(() => {
    handleOpen();
    handleSwipe();
    const unsubscribe = navigation.addListener('focus', () => {
      const newData = [];
      setMainData(newData);
    });

    return unsubscribe;
  }, [navigation]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSwipe = () => {
    setSwipe(true);
  };

  const [mainData, setMainData] = useState(DATA);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        style={styles.footer}
        onPress={() => navigation.push('MyPage')}
        onPressMain={() => navigation.push('Main')}
        onPressMusic={() => navigation.push('Music')}
      />
      <ScrollView style={styles.container} nestedScrollEnabled={true}>
        <View style={styles.story_wrap}>
          <MainStory data={DATA} frame={route.params} />
          <View style={styles.story_line}></View>
          <Contents data={DATA} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
  story_wrap: {
    width: '100%',
    backgroundColor: 'white',
  },
  story_line: {
    borderWidth: 0.18,
    borderColor: Pink,
  },
});

export default Main;
