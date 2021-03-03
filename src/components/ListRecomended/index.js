import React from 'react';
import {useNavigation} from '@react-navigation/native'

import {
  Container,
  Title,
  LeftImage,
  BoxImage,
  Image,
  Person,
  Name,
  RightImage,
  Perfil,
  Recomend,

} from './styles';




export default function ListRecomended()  {
  const navigation = useNavigation(); 
  function navigatetoperson(){
    navigation.navigate('Home')
  }
  return (
    <Container>


      <Title>RECOMENDADOS</Title>

      <Recomend>
        <LeftImage>


      
          <BoxImage
          onPress={navigatetoperson}
          
          >

            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80',
              }}
            />
            <Perfil>
              <Person
                source={{
                  uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                }}
              />


              <Name>Funciona Hotel</Name>
            </Perfil>
          </BoxImage>


          <BoxImage>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=746&q=80',
              }}
            />
            <Perfil>
              <Person
                source={{
                  uri: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=344&q=80',
                }}
              />

              <Name>Hotel Paulista</Name>
            </Perfil>
          </BoxImage>
        </LeftImage>



        <RightImage>
          <BoxImage>
            <Image
              style={{ height: 342, }}
              source={{
                uri: 'https://a0.muscache.com/im/pictures/12855c98-366f-49c3-85e9-c58ea7cba94e.jpg?im_w=1200',
              }}
            />
            <Perfil>
              <Person

                source={{
                  uri: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                }}
              />

              <Name>Boqueirão</Name>
            </Perfil>
          </BoxImage>

          <BoxImage>
            <Image
              style={{ height: 100, marginTop: 120, }}
              source={{
                uri: 'https://a0.muscache.com/im/pictures/2d1caadf-30e0-460a-8019-a9fe53edf0ae.jpg?im_w=960',
              }}
            />
            <Perfil>
              <Person
                source={{
                  uri: 'https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                }}
              />

              <Name>Hotel Centro</Name>
            </Perfil>
          </BoxImage>
        </RightImage>
      </Recomend>

    </Container>
  );
};


