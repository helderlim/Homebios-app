import React from 'react';

import { 
Container, 
 Imagem,
 Perfil,
 Person,
 Name,
 SubLegend,

} from './styles';







const SliderBottom = () => {
  return (
    <Container>    
       
        <Imagem
        source={{
          uri: 'https://a0.muscache.com/im/pictures/1500f69a-889a-4d4d-9f1c-195cc9bd3ef4.jpg?im_w=960',
        }}
      />
    
        <Perfil>
            
            <Person 
            source={{
                uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
              }}
            />
          
            <Name>Giana Happy</Name>
            </Perfil>
            <SubLegend>Comum</SubLegend>
            
        
    </Container>
  );
};

export default SliderBottom;
