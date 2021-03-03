import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.View`
    height:400px;
    width:343px;
    
    margin-top:15px;
`;

export const Imagem = styled.Image`
    height:333px;
    width:343px;

    margin-bottom:13px;
`;

export const Perfil = styled.View`
height:2px;
    width:343px;
    flex:1;
    flex-direction:row;
   
`;



 export const Person = styled.Image`
    height:35px;
    width:35px;

    border-radius: 17.5px;
 `;
 
 export const Name = styled.Text`
  color: ${colors.black};
  font-size:16px;
  margin-left:10px;
 `;
 
 export const SubLegend = styled.Text`
 color: ${colors.black};
  font-size:15px;
  margin-left:43px;
  margin-bottom:12px;
 `;
 
