import { Image } from "react-native";
import { Marker } from "react-native-maps";

function ArMarker(props) {
  console.log(props.img);
  return (
    <Marker
      style={{ width: props.size.width, height: props.size.height }}
      coordinate={{
        latitude: props.location.latitude,
        longitude: props.location.longitude,
      }}
      onPress={props.onPress}
    >
      <Image
        source={require("../../assets/arLocation.png")}
        /*Map.js에서 img={require(주소)}로 받으면
        source={props.img} 쓸 수 있음 */

        style={{
          width: props.size.width - 50,
          height: props.size.height - 50,
        }}
      />
    </Marker>
  );
}

export default ArMarker;
