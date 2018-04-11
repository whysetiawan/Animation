import React, { PureComponent } from 'react';
import { 
  View,
  Dimensions,
  StyleSheet
 } from 'react-native';
 import MapView, { Marker } from 'react-native-maps';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 40.7134248;;
const LONGITUDE = -74.00552499;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

 export default class Maps extends PureComponent {
  state={
    coordinate: {
      latitude: -6.916381,
      longitude: 107.610187,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
  }

  componentDidMount(){
    this.setState({
      coordinate: {
        latitude: -6.858759,
        longitude: 107.508418,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    })
  }

   render(){
     return(
       <MapView
        style={{ ...StyleSheet.absoluteFillObject }}
        region={this.state.coordinate}
       >
        <Marker
          coordinate={{
            latitude: -6.858759,
            longitude: 107.508418,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,            
          }}
        />
       </MapView>
     )
   }
 }