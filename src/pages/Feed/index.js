import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderFeed from '../../components/HeaderFeed';
import { Title } from '../../components/HeaderFeed/styles';
import ListRecomended from '../../components/ListRecomended';
import ListRecomendedBottom from '../../components/ListRecomendedBottom';
import SliderBottom from '../../components/SliderBottom';
import { Container } from './styles';



const Feed = () => {
  
  return (
    
    <Container>
      
      <ScrollView style={{ marginLeft: 10, }}>
      
        <HeaderFeed />

        <ListRecomended />
        <Title>Destaques da Semana</Title>
        <SliderBottom />
        <ListRecomendedBottom />
      </ScrollView>
      
    </Container>
  );
};

export default Feed;
