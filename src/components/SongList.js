import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const SongList = ({ title, image, singer, date, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.musicBox}>
          <Image style={styles.image} source={image} />

          <View style={styles.text}>
            <Text style={styles.title}>{title}</Text>
            <View style={{ marginTop: 3 }}>
              <Text style={styles.singerName}>노래 {singer}</Text>
            </View>
          </View>
          <View style={styles.play}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{ width: 25, height: 30 }}
                source={require('../../assets/playButton.png')}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 35,
    flex: 1,
    backgroundColor: 'pink',
    marginLeft: 40,
    marginTop: 15,
    marginRight: 25,
    elevation: 10,
    borderRadius: 5,
  },
  musicBox: {
    flex: 1,
    margin: 15,
    flexDirection: 'row',
    backgroundColor: 'pink',
  },
  image: {
    width: 100,
    height: 100,
    left: -40,
    borderRadius: 5,
  },
  play: {
    backgroundColor: 'pink',
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 2,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  singerName: {
    fontSize: 12,
    color: 'white',
  },
});

export default SongList;
