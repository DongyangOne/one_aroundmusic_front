import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Linking } from 'react-native';

const MusicPlay = ({ route }) => {
  const { trackId } = route.params;

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

  useEffect(() => {
    openSpotify();
  }, []);

  return <View />;
};

export default MusicPlay;
