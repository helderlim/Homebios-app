import React from 'react';
import { Container, Title, Dados, Label, Line } from './styles';

function PersonDados (){
  return (
    <Container>
     <Title>Seus Dados</Title>
     
     <Label>Nome:</Label>
     <Line>
     <Dados>Jessica dos SantosLima</Dados>
     </Line>

     <Label>CPF:</Label>
     <Line>
     <Dados>***.***.***-*</Dados>
     </Line>
     <Label>Celular:</Label>
     <Line>
     
     <Dados>(11)9 58648-55647</Dados>
     </Line>

     <Label>E-Mail:</Label>
     <Line>
     
     <Dados>jessicadoslima@gmail.com</Dados>
     </Line>
     
    </Container>
  );
};

export default PersonDados;
