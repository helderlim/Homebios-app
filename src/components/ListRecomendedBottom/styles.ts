import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.View`

`;

export const Title = styled.Text`
 color: ${colors.black};
 
 margin-top:7px;
 margin-bottom:10px;
`;

export const LeftImage = styled.View`
    
    flex-direction:column;
`;

export const BoxImage = styled.View`
    height:268px;
    width:100px;
`;

export const Image = styled.Image`
     height:220px;
    width:167px;
    border-radius:6px;
`;

export const Person  = styled.Image`

height:35px;
    width:35px;

    border-radius: 17.5px;
`;

export const Name = styled.Text`
color: ${colors.black};
  font-size:13px;
  
  
`;
export const Perfil = styled.View`
margin-top:5px;
flex-direction:row;
align-items:center;
`;

export const Recomend = styled.View`
flex-direction:row;
`;




export const RightImage = styled.View`
margin-left:78px;
`;

