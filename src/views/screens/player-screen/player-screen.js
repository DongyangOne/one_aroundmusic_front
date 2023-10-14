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

  const handlePlay = () => {
    if (sound) {
      sound.play();
      setIsPlay(true);
    }
  };

  const handleStop = () => {
    if (sound && isPlay) {
      sound.pause();
      setIsPlay(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Play" onPress={handlePlay} />
      <Button title="Stop" onPress={handleStop} />
    </View>
  );
};

export default PlayerScreenView;
