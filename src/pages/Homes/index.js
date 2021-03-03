import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SliderTwo from '../../components/SliderTwo';
import TopHome from '../../components/Home/TopHome';
import PersonHomes from '../../components/Home/PersonHomes';
import ListImagesHome from '../../components/Home/ListImageHomes';
import ItemMaps from '../../components/Home/ItemMaps';
import ComodidadesHomes from '../../components/Home/ComodidadesHomes';


import { 
  Container,
  L,
  Texto,
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import CommentHomes from '../../components/Home/CommentHomes';



const images = [
  'https://a0.muscache.com/im/pictures/71ecda50-e120-4f06-b97f-3110d20f31ac.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/41fd9346-af3a-4dd4-9e72-9f3b24ec51d7.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/41bcdc2f-e231-4ae8-99b1-7e2e5406e08d.jpg?im_w=960'

]

const Home = () => {
  return (
    <Container>
      <ScrollView>
      <SliderTwo images={images}/>
      <StatusBar style="dark"/> 
      <TopHome/>
      {/*adicionar link para navegação perfil*/}
      <PersonHomes/>
      <Texto>CASA COM PISCINA,{'\n'}PRÓXIMO DA LINHA AZUL DA CPTM{'\n'}AMBIENTE AGRADAVEL</Texto>
      <L/>
      <ListImagesHome/>
      <L/>
      <Texto>15 HÓSPEDES - 4 QUARTO - 12 CAMAS</Texto>
      <ComodidadesHomes/>
      <ItemMaps/>
      <L/>
      <CommentHomes/>
      
      </ScrollView>
    </Container>
  );
};

export default Home;
