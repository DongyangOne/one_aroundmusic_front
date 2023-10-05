import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import Header from '../components/Header';
import FilterButton from '../components/FilterButton';
import SongList from '../components/SongList';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FilterTagButton from '../components/FilterTagButton';
const FILTER = [
  {
    id: 1,
    title: '나이',
  },
  {
    id: 2,
    title: '성별',
  },
  {
    id: 3,
    title: '날씨',
  },
  {
    id: 4,
    title: '시간',
  },
  {
    id: 5,
    title: '계절',
  },
];

const DATA = [
  {
    id: 1,
    tag: '#10대',
  },
  {
    id: 2,
    tag: '#여성',
  },
  {
    id: 3,
    tag: '#봄',
  },
];

const SONG = [
  {
    title: '신호등',
    singer: '이무진',
    date: '2022 . 04 . 22',
    image: require('../../assets/music1.jpg'),
  },
  {
    title: 'Super Shy',
    singer: 'NewJeans',
    date: '2023 . 07 . 21',
    image: require('../../assets/album/album5.png'),
  },
  {
    title: '퀸카(Queencard)',
    singer: '(여자)아이들',
    date: '2023 . 05 . 15',
    image: require('../../assets/album/album6.png'),
  },
  {
    title: 'I AM',
    singer: 'IVE(아이브)',
    date: '2023 . 04 . 22',
    image: require('../../assets/album/album4.png'),
  },
  {
    title: 'Spicy',
    singer: 'aespa',
    date: '2023 . 05 . 08',
    image: require('../../assets/album/album8.png'),
  },
  {
    id: 3,
    title: '벚꽃엔딩',
    singer: '버스커 버스커',
    date: '2013 . 04 . 22',
    image: require('../../assets/album/album3.png'),
  },
  {
    id: 1,
    title: '봄봄봄',
    singer: '로이킴',
    date: '2013 . 04 . 22',
    image: require('../../assets/album/album1.png'),
  },
  {
    id: 2,
    title: '봄이좋냐',
    singer: '10cm',
    date: '2013 . 04 . 22',
    image: require('../../assets/album/album2.png'),
  },
  {
    id: 3,
    title: '벚꽃엔딩',
    singer: '버스커 버스커',
    date: '2013 . 04 . 22',
    image: require('../../assets/album/album3.png'),
  },
];

const Music = ({ navigation }) => {
  const handleMusicClick = (title, singer) => {
    navigation.navigate('MusicPlay', {
      title: title,
      singer: singer,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header onPress={() => navigation.navigate('MyPage')} />
      </View>
      <View style={styles.next}>
        <View style={styles.nextI}>
          <FlatList
            style={styles.filter}
            data={FILTER}
            renderItem={({ item }) => (
              <FilterButton
                color="#F2F3F6"
                textColor="#3F3F3F"
                title={item.title}
                onPress={() => navigation.push('Filter')}
              />
            )}
            numColumns={5}
          />
          <TouchableOpacity
            style={styles.filter}
            onPress={() => navigation.push('Filter')}>
            <Image
              style={{
                marginTop: 8,
                paddingLeft: 15,
                width: 20,
                height: 20,
                marginRight: 20,
              }}
              source={require('../../assets/filterIcon.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tagListContainer}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <FilterTagButton
                color="#2F4560"
                textColor="#ffffff"
                title={item.tag}
              />
            )}
            numColumns={3}
          />
        </View>
        {/*빈칸*/}
        {/**음악 스크롤 뷰 페이지 */}
        <View style={styles.musicScroll}>
          <ScrollView style={styles.ScrollView}>
            <View style={styles.space}></View>
            <View style={styles.start}>
              <View style={styles.music}>
                <FlatList
                  data={SONG}
                  renderItem={({ item }) => (
                    <SongList
                      image={item.image}
                      title={item.title}
                      singer={item.singer}
                      date={item.date}
                      onPress={() => handleMusicClick(item.title, item.singer)}
                    />
                  )}
                />
              </View>
            </View>
          </ScrollView>
          <Header style={styles.footer} onPress={() => navigation.push('MyPage')} onPressMain={() => navigation.push('Main')} />

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001C3E',
    flex: 1,
  },
  next: {
    flex: 1,
    backgroundColor: '#001C3E',
  },
  nextI: {
    backgroundColor: '#001C3E',
    flexDirection: 'row',
  },
  tagListContainer: {
    backgroundColor: '#001C3E',
    marginTop: 5,
  },
  all: {
    flex: 1,
  },
  musicScroll: {
    flex: 1,
    backgroundColor: 'pink',
    marginTop: 30,
  },
  ScrollView: {
    flex: 1,
    backgroundColor: '#001C3E',
  },
  space: {
    flex: 3,
    backgroundColor: '#001C3E',
    height: 50,
  },
  start: {
    flex: 8,
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  music: {
    top: -60,
  },
});

export default Music;
