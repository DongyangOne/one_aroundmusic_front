// ** Component Imports
import PlayerScreenView from './player-screen';

const PlayerScreen = ({
  audioUrl = 'https://p.scdn.co/mp3-preview/7f3b1a226d83b86924194c89aff6d92d840bef4d?cid=d411b41e0fe24fdb93f556b260b0a927',
}) => {
  return <PlayerScreenView audioUrl={audioUrl} />;
};

export default PlayerScreen;
