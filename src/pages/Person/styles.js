import styled from 'styled-components';

export const Container = styled.View`
 margin-left:10px;
 margin-top:35px;
`;

export const Perfil = styled.Image`
    height:140px;
    width:140px;

    border-radius:70px;
    margin-top:40px;
    
`;
export const BoxPerfil = styled.View`

flex-direction:column;
    align-items:center;
`;
export const Name = styled.Text`
    font-size:36px;
`;
export const City = styled.Text`
    font-size:13px;
    margin-top:10px;
`;

export const LogOut = styled.Text`

`;

export const Botao = styled.TouchableOpacity`
 border:2px;
 height:52px;
 width:250px;
 align-items:center;
 justify-content:center;
 border-radius:5px;

 margin-top:15px;
`;