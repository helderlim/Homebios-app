import React from 'react';
import Slider from '../Slider';


import { Container, Title, SubTitle  } from './styles';


const images = [
  'https://a0.muscache.com/im/pictures/71ecda50-e120-4f06-b97f-3110d20f31ac.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/41fd9346-af3a-4dd4-9e72-9f3b24ec51d7.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/41bcdc2f-e231-4ae8-99b1-7e2e5406e08d.jpg?im_w=960'

]





const HeaderFeed = () => {
  return (
    <Container>
      <Title>Conforto com Biometria</Title>
      <SubTitle>QUER VIAJAR HOJE?</SubTitle>
      <Slider images={images}/>
    

    </Container>
  );
};

export default HeaderFeed;
