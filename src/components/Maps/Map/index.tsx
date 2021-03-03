import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

import { 
  Container,
  Title,
  Description,
  ImageDestaque,
  ContainerDescription,
  
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const {height, width}=Dimensions.get('window');

export default class  Map extends Component {
  state = {
    //dados do banco 
    palces: [
      {
        id:1,
        title: 'La Plaza Hotel',
        description: 'Em frente a estação  proximo de tudo.', 
        valor:'R$500',
        image:'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80',
        latitude: -23.503029,
        longitude: -46.623506,
      },
      
      {
        id:2,
        title: 'Habis Hotel',
        description: 'O melhor da Região no quesito Conforto', 
        valor:'R$300',
        image:'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        latitude: -23.501760,
        longitude: -46.622270,
      },
      
      {
        id:3,
        title: 'Paulista Hotel',
        description: 'Procurando Conforto? Esta no lugar certo !!', 
        valor:'R$200',
        image: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        latitude: -23.503300,
        longitude: -46.622350,
      }
      

    ]
  };


_mapReady =() => {
  this.state.palces[0].mark.showCallout();
}
 


  render() {
    const {latitude, longitude}=this.state.palces[0];

    return(
 


    <Container>
   
    <MapView 
    ref={map => this.mapView = map}
     style={styles.mapStyle}
       initialRegion={{
       latitude,
       longitude,
        latitudeDelta: 0.0002,
        longitudeDelta: 0.0221,}}
        showsPointsOfInterest={false}
        showsBuildings={false}
        onMapReady={this._mapReady}
      >

        {this.state.palces.map(place =>(
          <MapView.Marker
          ref={mark => place.mark = mark}
          key={place.id}
          title={place.title}
          //adicionar valor da estadia. uma descrição com valor 
          description={place.valor}
          coordinate={{
            latitude: place.latitude,
            longitude: place.longitude,
          }}
  
          />
        ))}

        

      </MapView>
      <ScrollView  style={styles.placesContainer }
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      //animação movimento entre as opções
      onMomentumScrollEnd={e =>{
        const scrolled = e.nativeEvent.contentOffset.x;

        const place =(scrolled > 0) 
        ?  scrolled / Dimensions.get('window').width
        :0;

        const {latitude, longitude, mark  }= this.state.palces[place];

        this.mapView.animateToCoordinate({
          latitude,
          longitude,

        });

        setTimeout(() => {
          mark.showCallout();
        });

      }}
      >
        {this.state.palces.map(place =>(
          <View 
          key={place.id}
          style={styles.place}
          
          >
            
           <ContainerDescription>
            <ImageDestaque source={{
                uri: place.image
              }}/>
           </ContainerDescription>
          <Title>{place.title}</Title>
            <Description>{place.description}{'\n'}{place.valor}</Description>
         
         
          
          </View>
        ))}
        
        
      </ScrollView>
      </Container>
    )
  } 
};



const styles = StyleSheet.create({
  
  mapStyle: {
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
    },

    placesContainer: {
      width: '100%',
    maxHeight:130, 
    
    },

    place:{
      width: width - 40,
      maxHeight:120,
      backgroundColor: '#FFF',
      marginHorizontal: 20,
      borderRadius:8,
    }
});