import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import YoutubePlayer from 'react-native-youtube-iframe';

const MusicPlay = ({ navigation, route }) => {
  const { title, singer } = route.params;
  const [videoId, setVideoId] = useState(null);
  const [videoTitle, setVideoTitle] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const fetchVideo = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${title} ${singer} auto-generated&type=video&key=AIzaSyBNG-px9kSRnKbGuVRS8DGBIxP4VRY8yVw`,
      );
      const video = response.data.items[0];
      setVideoId(video.id.videoId);
      setVideoTitle(video.snippet.title);
      setThumbnailUrl(video.snippet.thumbnails.high.url);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/*  <ImageBackground
        style={{ flex: 1, opacity: 0.5, backgroundColor: '#000000' }}
        source={require('../../assets/album.png')}> */}
      {/* <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} /> */}
      {videoId ? (
        <>
          <YoutubePlayer height={200} play={true} videoId={videoId} />
          <Text style={styles.text}>ID: {videoId}</Text>
          <Text style={styles.text}>Title: {videoTitle}</Text>
        </>
      ) : (
        <Text style={styles.text}>이미지가 없습니다.</Text>
      )}
      <Button
        title="공유하기"
        onPress={() =>
          navigation.navigate('ArScreen2', {
            youtubeId: videoId,
            title: videoTitle,
            thumbnailUrl: thumbnailUrl,
          })
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  thumbnail: {
    borderRadius: 100,
    borderWidth: 1,
    width: 200,
    height: 200,
    marginTop: 10,
    alignSelf: 'center',
    top: '15  %',
    backgroundColor: 'pink',
  },
});
export default MusicPlay;
