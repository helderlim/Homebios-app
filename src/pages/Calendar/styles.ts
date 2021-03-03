import styled from 'styled-components';

export const Container = styled.View`
 background-color:white;
 align-items:center;
`;

export const TextInput = styled.TextInput`
 border: 2px solid black;
 margin-left:10px;
 height:40px;
 width:70px;
 border-radius:8px;
 text-align:center;
 
 
`;

export const Label = styled.Text`
    font-size:30px;
    margin-top:50px;
`;

export const ContainerInput = styled.View`
    flex-direction: row;
`;

export const Botao = styled.TouchableOpacity`
    border: 2px solid black;
    height:35px;
    width:200px;
    align-items:center;
    justify-content:center;
    border-radius:7px;
    background-color:black;
    margin-top:30px;
    margin-bottom:40px;
    `;