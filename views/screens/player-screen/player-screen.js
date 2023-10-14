// ** React Imports
import { useEffect, useState } from 'react';

// ** RN Imports
import { Button, View } from 'react-native';

// ** Utils Imports
import Sound from 'react-native-sound';

const PlayerScreenView = ({ audioUrl }) => {
  const [sound, setSound] = useState(null);
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    const sound = new Sound(audioUrl, null);

    setSound(sound);
  }, []);

  const play = () => {
    if (sound) {
      sound.play();
      setIsPlay(true);
    }
  };

  const stop = () => {
    if (sound && isPlay) {
      sound.pause();
      setIsPlay(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Play" onPress={play} />
      <Button title="Stop" onPress={stop} />
    </View>
  );
};

export default PlayerScreenView;
