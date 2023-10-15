// ** RN Imports
import { Button, View } from 'react-native';

const PlayerScreenView = ({ handlePlay, handleStop }) => {
  return (
    <View style={{ flex: 1 }}>
      <Button title="Play" onPress={handlePlay} />
      <Button title="Stop" onPress={handleStop} />
    </View>
  );
};

export default PlayerScreenView;
