import React from 'react';
import { Button, Linking } from 'react-native';

const MusicPlay = ({ route }) => {
  const { trackId } = route.params;
  console.log(trackId);
  const openSpotify = async () => {
    const appUrl = `spotify:track:${trackId}`;
    const webUrl = `https://open.spotify.com/track/${trackId}`;
    const supported = await Linking.canOpenURL(appUrl);

    if (supported) {
      await Linking.openURL(appUrl);
    } else {
      await Linking.openURL(webUrl);
    }
  };

  return <Button title="Play on Spotify" onPress={openSpotify} />;
};

export default MusicPlay;
