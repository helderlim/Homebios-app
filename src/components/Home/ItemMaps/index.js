import React from 'react';

import MapView from 'react-native-maps';
import { StyleSheet} from 'react-native';
import { Container } from './styles';


const ItemMaps = () => {


  return (
    
    <Container>
      <MapView 
     style={styles.mapStyle}
       initialRegion={{
       latitude: -23.503029,
       longitude: -46.623506,
        latitudeDelta: 0.0002,
        longitudeDelta: 0.0121,}}
        rotateEnabled={false}
        scrollEnabled={false}
      >
        <MapView.Marker
        coordinate={{
        latitude: -23.503029,
        longitude: -46.623506,
        }}
        />

      </MapView>
    </Container>
  );
       
  
};

export default ItemMaps;


const styles = StyleSheet.create({
  
  mapStyle: {
    height:172,
    width:334,
    },
  })