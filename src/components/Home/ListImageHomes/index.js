import React from 'react';

import {
  Container,
  ContainerImage,
  ContainerImageRight,
  ImageHome,

} from './styles';

const ListImageHomes = () => {
  return (
    <Container>
      <ContainerImage>
        <ImageHome source={{ uri: 'https://a0.muscache.com/im/pictures/71a3de46-cd93-430f-9362-a3df25dc4d7e.jpg?im_w=1200' }}></ImageHome>
        <ImageHome source={{ uri: 'https://a0.muscache.com/im/pictures/f5401ec9-f982-4042-8067-c172a5c6bf6a.jpg?im_w=1200' }}></ImageHome>
        <ImageHome source={{ uri: 'https://a0.muscache.com/im/pictures/b2da77f9-2c0c-4295-98db-b7336402953a.jpg?im_w=1200' }}></ImageHome>
      </ContainerImage>
      <ContainerImageRight>
        <ImageHome source={{ uri: 'https://a0.muscache.com/im/pictures/71bb4eb7-ccfd-4e47-a287-d31147b4dc14.jpg?im_w=960' }}></ImageHome>
        <ImageHome source={{ uri: 'https://a0.muscache.com/im/pictures/019b619a-599e-4820-8c69-14be9d438e78.jpg?im_w=1200' }}></ImageHome>
        <ImageHome source={{ uri: 'https://a0.muscache.com/im/pictures/10d1e5df-9cf7-4a1d-b528-e5d54a5b29c3.jpg?im_w=1200' }}></ImageHome>
      </ContainerImageRight>
    </Container>
  );
};

export default ListImageHomes;
