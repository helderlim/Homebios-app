import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ListPerson from '../../components/Person/ListPerson';
import TopPerson from '../../components/Person/TopPerson';
import { Container } from './styles';




const Person = () => {
  return (
    <Container >
  <ScrollView>
   <TopPerson />
   <ListPerson />
    
   </ScrollView> 
   </Container>
  );
};



export default Person;