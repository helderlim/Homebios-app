import React from 'react';

import { 
  Container,
  Perfil,
  Name,
  City,
  LogOut,
  BoxPerfil,
  Botao
  } from './styles';


import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';


const TopPerson= () => {
  const navigation = useNavigation(); 
  function navigatetoperson(){
    navigation.navigate('Proprietario')
  }
  return (
    <Container>
    <BoxPerfil>
    <Perfil
    source={{
      uri: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    }}
    />
    <Name>Jessica</Name>
    <City>São Paulo, SP</City>
    <Botao>
    <LogOut>Log Out</LogOut>
    </Botao>
    </BoxPerfil>
    <StatusBar style='auto'/>

    
  </Container>
  );
};

export default TopPerson;
