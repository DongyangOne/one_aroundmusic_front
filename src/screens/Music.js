import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-virtualized-view';
import Header from '../components/Header';
import FilterButton from '../components/FilterButton';
import SongList from '../components/SongList';
import { TouchableOpacity } from 'react-native';

import SVGComponentFilter from '../components/SVG/SVGComponentFilter';
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
const Music = ({ navigation }) => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch(
            'https://api.spotify.com/v1/playlists/37i9dQZF1DWT9uTRZAYj0c/tracks',
            {
              headers: {
                Authorization: 'Bearer ' + token,
              },
            },
          );
          const data = await response.json();
          setTracks(data.items);
          console.log(data.items[1].track);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      } else {
        navigation.navigate('Start');
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header
          style={styles.footer}
          onPress={() => navigation.push('MyPage')}
          onPressMain={() => navigation.push('Main')}
        />
      </View>
      <View style={styles.next}>
        <View style={styles.nextI}>
          <FlatList
            style={styles.filter}
            data={FILTER}
            renderItem={({ item }) => (
              <FilterButton
                color="#F2F3F6"
                textColor="#5E5E5E"
                title={item.title}
                onPress={() => navigation.push('Filter')}
              />
            )}
            numColumns={5}
          />
          <TouchableOpacity
            style={styles.filterIcon}
            onPress={() => navigation.push('Filter')}>
            <SVGComponentFilter />
          </TouchableOpacity>
        </View>
        <View style={styles.tagListContainer}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <FilterButton
                color="#2F4560"
                textColor="#DE91A9"
                title={item.tag}
              />
            )}
            numColumns={3}
          />
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#ffffff" />
        ) : (
          <ScrollView style={styles.ScrollView}>
            <View style={styles.space}></View>
            <View style={styles.start}>
              <View style={styles.music}>
                <FlatList
                  data={tracks}
                  keyExtractor={item => item.track.id}
                  renderItem={({ item }) => (
                    <SongList
                      image={{ uri: item.track.album.images[0].url }}
                      title={item.track.name}
                      singer={item.track.artists[0].name}
                      date={item.track.album.release_date}
                      onPress={() =>
                        navigation.navigate('PlayerScreen', {
                          title: item.track.name,
                          image: item.track.album.images[0].url,
                          singer: item.track.artists[0].name,
                          trackId: item.track.id,
                          href: item.track.preview_url,
                        })
                      }
                    />
                  )}
                />
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  next: {
    flex: 1,
    backgroundColor: 'white',
  },
  nextI: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  tagListContainer: {
    backgroundColor: 'white',
    marginTop: 5,
  },
  all: {
    flex: 1,
  },
  filterIcon: {
    marginRight: 15,
    marginTop: 2,
  },
  musicScroll: {
    flex: 1,
    backgroundColor: 'pink',
    marginTop: 30,
  },
  ScrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  space: {
    flex: 3,
    backgroundColor: 'white',
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
