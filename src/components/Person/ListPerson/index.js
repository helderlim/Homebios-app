import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CadastroHome from '../../../pages/CadastroHome';
import {useNavigation} from '@react-navigation/native'
import {
  Container,
  Line,
  Text,
  Box,
  View,
  Image,
} from './styles';
import { Alert } from 'react-native';



function ListPerson (){
  const navigation = useNavigation(); 
  function navigatetocad(){
    navigation.navigate('CadImovel')
  }
  function navigatetodados(){
    navigation.navigate('Dados Pessoais')
  }

  
function buttonOnpress(){
  Alert.alert('Funcionamento na próxima atualização')
}
  return (
    <Container>
      <Box 
      onPress={navigatetodados}
      >
        <Text>Dados pessoais</Text>
        <View source={require('../../../images/perfil.png')} />
      </Box>
      <Line />

     

      <Box
      onPress={buttonOnpress}
      >
        <Text>Minhas Viajens</Text>
        <Image style={{ marginLeft: 130, }} source={require('../../../images/mobile-payment.png')} />
      </Box>
      <Line />

      <Box
      onPress={navigatetocad}
      >
        <Text>Anuncie seu Espaço</Text>
        <Image style={{ marginLeft: 70, }} source={require('../../../images/houses.png')} />
      </Box>
      <Line />

      <Box
      onPress={buttonOnpress}
      >
        <Text>Termo de Serviço</Text>
        <Image style={{ marginLeft: 102, }} source={require('../../../images/document.png')} />
      </Box>
      <Line />

      <Box
      onPress={buttonOnpress}
      >
        <Text>Trocar de conta</Text>
        <Image style={{ marginLeft: 122, }} source={require('../../../images/return.png')} />
      </Box>
      <Line />
     
    </Container>
    
  );
};

export default ListPerson;

