import React from 'react';


import { 
  Container,
  BoxChat,
  Perfil,
  Name,
  Date,
  BoxName,
  Comment,
  Texto,
  ButtonExtend,
} from './styles';

const CommentHomes: React.FC = () => {
  return (
    <Container>
      <BoxChat>
        <Perfil source={{uri: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    }}/>
      
        <BoxName>
        <Name>Jessica </Name>
        <Date>fevereiro de 2020</Date>
        </BoxName>
        </BoxChat>
        <Comment>gostei muito do local e do ambiente, muito aconchegante. 
fui muito bem recebida com a limpeza impecavel.
e a bioemtria que sempre simplifica nossas vidas. gratidão.</Comment>
      
      <ButtonExtend><Texto>VEJA MAIS COMENTARIOS</Texto></ButtonExtend>
    </Container>
  );
};

export default CommentHomes;
