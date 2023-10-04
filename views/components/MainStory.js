import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {TouchableOpacity} from 'react-native';
import { IMG_SRC } from '../screens/ListenKing';

const MainStory = ({ data, frame }) => {
  // try {
  //   return (
  //       <View style={styles.storyRow}>
  //         {/* New Code */}
  //         {data.map((item, index) => (
  //           <View style={styles.story}>
  //             <TouchableOpacity>
  //               {index == 0 ? (
  //                 <ImageBackground
  //                   source={IMG_SRC[frame.setData].src}
  //                   style={styles.imageBg}>
  //                   <Image source={data[0].src} style={styles.imageSe}></Image>
  //                 </ImageBackground>
  //               ) : (
  //                 <Image source={item.src} style={styles.image}></Image>
  //               )}
  //             </TouchableOpacity>
  //           </View>
  //         ))}
  //       </View>
  //   );
  // } catch (error) {
    return (
        <View style={styles.storyRow}>
          {/* Previous Code */}
          {/* {data.map(item => ( */}
            <View style={styles.story}>
              <TouchableOpacity>
                <Image source={data[0].src} style={styles.image}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.story}>
              <TouchableOpacity>
                <Image source={data[1].src} style={styles.image}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.story}>
              <TouchableOpacity>
                <Image source={data[2].src} style={styles.image}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.story}>
              <TouchableOpacity>
                <Image source={data[3].src} style={styles.image}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.story}>
              <TouchableOpacity>
                <Image source={data[4].src} style={styles.image}></Image>
              </TouchableOpacity>
            </View>
          {/* ))} */}
        </View>
    );
  }
// };

const styles = StyleSheet.create({
  container: {},
  storyRow: {
    flexDirection: 'row',
    backgroundColor: '#001C3E',
    height: 100,
    width: '100%',
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginLeft: 18,
    marginTop: 18,
    borderWidth: 1,
    borderColor: 'white',
    padding: 4,
  },
  imageBg: {
    width: 78,
    height: 78,
    borderRadius: 28,
    marginLeft: 5,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSe: {
    width: 56,
    height: 56,
    borderRadius: 28,
    // marginLeft: 18,
    // marginTop: 18,
    marginLeft: 1,
    borderWidth: 1,
    borderColor: 'white',
    padding: 4,
  },
});

export default MainStory;
