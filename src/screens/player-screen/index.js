// ** React Imports
import { useEffect, useState } from 'react';

// ** Component Imports
import PlayerScreenView from './player-screen';

const PlayerScreen = ({ route, navigation }) => {
  return <PlayerScreenView route={route} navigation={navigation} />;
};

export default PlayerScreen;
