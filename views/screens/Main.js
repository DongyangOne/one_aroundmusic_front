import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import Header from '../components/Header';
import MainStory from '../components/MainStory';
import Contents from '../components/Contents';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const FriendItem = ({ src }) => (
  <View>
    <MainStory src={src} />
  </View>
);
const ContentsItem = ({ id, src, story }) => (
  <View>
    <Contents id={id} src={src} story={story} />
  </View>
);

const Main = ({ navigation, route }) => {
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('accessToken');
  //     if (value !== null) {
  //       console.log(value);
  //     } else {
  //       console.log('No data found');
  //     }
  //   } catch (e) {
  //     console.error('Error reading data', e);
  //   }
  // };

  // getData();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        style={styles.footer}
        onPress={() => navigation.push('MyPage')}
        onPressMain={() => navigation.push('Main')}
        onPressMusic={() => navigation.push('Music')}
      />
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.story_wrap}>
          <MainStory data={DATA} frame={route.params} />
          {/* <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <ContentsItem id={item.id} src={item.src} story={item.story} />
            )}
            numColumns={3}
          /> */}
          <View style={styles.story_line}></View>
          <View>
            <Contents data={DATA} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  story_wrap: {
    width: '100%',
  },
  story_line: {
    borderWidth: 0.1, // 선의 너비
    borderColor: '#3A4552', // 투명한 선
  },
});

export default Main;
