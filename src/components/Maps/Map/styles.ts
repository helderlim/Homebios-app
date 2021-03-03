import styled from 'styled-components';
import {Dimensions} from 'react-native';

const {height, width}=Dimensions.get('window');

export const Container = styled.View`
    flex:1;
    justify-content:flex-end;
`;

export const Title = styled.Text`
    font-size:20px;
    margin-left:113px;
    
`;

export const ContainerDescription = styled.View`
    flex:1;
   
    
`;

export const Description = styled.Text`
    font-size:16px;
    margin-left:113px;
    margin-bottom:100px;

`;

export const ImageDestaque = styled.Image`
 height:120px;
 width:110px;

 
`;

