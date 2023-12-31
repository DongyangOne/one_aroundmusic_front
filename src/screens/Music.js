import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  ActivityIndicator,
  Image,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-virtualized-view';
import Header from '../components/Header';
import FilterButton from '../components/FilterButton';
import SongList from '../components/SongList';
import { TouchableOpacity } from 'react-native';
import SVGComponentFilter from '../components/SVG/SVGComponentFilter';
import API_URLS from '../constant/MusicList';
import { FILTER } from '../components/DummyData';
import { useSwipe } from '../context/AuthContext';
const Music = ({ route, navigation }) => {
  // Check if route.params is defined
  let DATA = [];
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { swipe, setSwipe } = useSwipe(false);
  let apiLink =
    'https://api.spotify.com/v1/playlists/37i9dQZF1DX9tPFwDMOaN1/tracks';
  if (route.params) {
    apiLink = route.params.apiUrl;
    const { selectedGenre, selectedSeason, selectedTime, selectCountry } =
      route.params;
    if (selectedGenre) {
      DATA.push({
        id: 1,
        tag: selectedGenre,
      });
    }

    if (selectedSeason) {
      DATA.push({
        id: 2,
        tag: selectedSeason,
      });
    }

    if (selectedTime) {
      DATA.push({
        id: 3,
        tag: selectedTime,
      });
    }
    if (selectCountry) {
      DATA.push({
        id: 4,
        tag: selectCountry,
      });
    }
  }
  const shuffleArray = array => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    handleSwipe();
    fetchData();
  }, [route.params]);

  const fetchData = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      try {
        const response = await fetch(`${apiLink}`, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
        const data = await response.json();

        const filteredTracks = data.items.filter(
          item => item.track.preview_url !== null,
        );

        const shuffledTracks = shuffleArray(filteredTracks);
        setTracks(shuffledTracks);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    } else {
      ToastAndroid.show(
        '스포티파이가 연동되지 않아 음악 리스트를 띄울 수 없습니다.',
        ToastAndroid.SHORT,
      );
      // navigation.navigate('Start');
    }
  };
  const handleSwipe = () => {
    setSwipe(false);
  };
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
            numColumns={4}
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
    marginRight: 10,
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
    marginTop: 10,
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
