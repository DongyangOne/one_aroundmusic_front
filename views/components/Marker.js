import { Image } from "react-native"
import { Marker } from "react-native-maps"

function ArMarker(props) {

    return (
        <Marker 
            style={{width:props.size.width, height:props.size.height}}
            coordinate={{latitude: props.location.latitude, longitude: props.location.longitude}}
        >
            <Image
                source={require('../../assets/arLocation.png')}
                style={{width: props.size.width-50, height: props.size.height-50}}
            />
        </Marker>
    )
}

export default ArMarker