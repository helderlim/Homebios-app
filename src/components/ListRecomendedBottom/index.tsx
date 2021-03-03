import React from 'react';


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

const ListRecomendedBottom: React.FC = () => {
  return (
    <Container>
      <Title>RECOMENDADOS</Title>

      <Recomend>
        <LeftImage>

          <BoxImage

          >
            <Image

              source={{
                uri: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
              }}
            />
            <Perfil>
              <Person
                source={{
                  uri: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                }}
              />

              <Name>SP Litoral</Name>
            </Perfil>
          </BoxImage>

          <BoxImage>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=315&q=80',
              }}
            />
            <Perfil>
              <Person
                source={{
                  uri: 'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                }}
              />

              <Name>Sampa Paulista</Name>
            </Perfil>
          </BoxImage>
        </LeftImage>



        <RightImage>
          <BoxImage>
            <Image
              style={{ height: 342, }}
              source={{
                uri: 'https://images.unsplash.com/photo-1551516595-4eead4e44a84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
              }}
            />
            <Perfil>
              <Person

                source={{
                  uri: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=351&q=80',
                }}
              />

              <Name>Litoral Host</Name>
            </Perfil>
          </BoxImage>

          <BoxImage>
            <Image
              style={{ height: 100, marginTop: 120, }}
              source={{
                uri: 'https://a0.muscache.com/im/pictures/762db659-95be-4ece-a32a-1add76c984d2.jpg?im_w=960',
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

export default ListRecomendedBottom;
