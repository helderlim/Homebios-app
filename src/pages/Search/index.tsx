import React from 'react';
import {TextInput, Text} from 'react-native';
import { Container, Title } from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <Title>Procurar</Title>
      <TextInput
      style={{ height: 45, borderColor: 'gray', borderWidth: 2, width:340, marginTop:20, }}
    />
    <Text style={{fontSize:20, textAlign:'center',}}>Disponivel na próxima atualização</Text>
    </Container>
    
  );
};

export default Search;
