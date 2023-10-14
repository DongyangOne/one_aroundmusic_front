import { Image } from 'react-native';
import { Marker } from 'react-native-maps';

function ArMarker({ location, size, onPress }) {
  return (
    <Marker
      style={{ width: size.width, height: size.width }}
      coordinate={{
        latitude: location.latitude,
        longitude: location.longitude,
      }}
      onPress={onPress}>
      <Image
        source={require('../../../assets/arLocation.png')}
        style={{
          width: size.width,
          height: size.height,
        }}
      />
    </Marker>
  );
}

export default ArMarker;
