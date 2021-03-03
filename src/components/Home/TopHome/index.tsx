import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  Container,
  TextTitle,
  Country,
  ButtonCalendar,
  ContainerTitle,
  TextButtonOne,
} from './styles';

const TopHome: React.FC = () => {
  const navigation = useNavigation();
  function navigatetoperson() {
    navigation.navigate('Agenda')
  }




  return (
    <Container>
      <ContainerTitle>
        <TextTitle>São Paulo Tatuapé</TextTitle>
        <Country>SANTANA , SP</Country>
        <ButtonCalendar onPress={navigatetoperson}
        ><TextButtonOne>CONFERIR DISPONIBILIDADE</TextButtonOne></ButtonCalendar>



      </ContainerTitle>
    </Container>
  );
};

export default TopHome;
