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
                Authorization: `Bearer ${token}`,
              },
            },
          );
          const data = await response.json();
          setTracks(data.items);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      } else {
        navigation.navigate('StartingPage');
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
              <FilterButton
                color="#2F4560"
                textColor="#ffffff"
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
                        navigation.navigate('MusicPlay', {
                          title: item.track.name,
                          image: item.track.album.images[0].url,
                          singer: item.track.artists[0].name,
                          trackId: item.track.id,
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
