import React from 'react';

import { 
  Container,
  BoxChat,
  Perfil, 
  Name, 

} from './styles';



const PersonHomes: React.FC = () => {
  return (
    <Container>
      <BoxChat>
        <Perfil source={{uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    }}/>
        <Name>ANNA MARIA</Name>
        
        
      </BoxChat>
    </Container>
  );
};

export default PersonHomes;
