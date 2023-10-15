// ** React Imports
import { useEffect, useState } from 'react';

// ** Component Imports
import PlayerScreenView from './player-screen';

// ** Utils Imports
import Sound from 'react-native-sound';

const PlayerScreen = ({
  audioUrl = 'https://p.scdn.co/mp3-preview/7f3b1a226d83b86924194c89aff6d92d840bef4d?cid=d411b41e0fe24fdb93f556b260b0a927',
}) => {
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

  return <PlayerScreenView handlePlay={handlePlay} handleStop={handleStop} />;
};

export default PlayerScreen;
