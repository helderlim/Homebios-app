import React   from 'react';


import { 
  Container,
  TextTitle,
  Item,
  Incon,
  ButtonExtend, 
  TextButton,
} from './styles';
import{BottomPopup}  from './BottomPopup'

const popuplist=[
  {id:1,name:'Wifi'},{id:2,name:'Ar-condicionado'},{id:3,name:'TV'},{id:4,name:'Academia'},
  {id:5,name:'Máquina de Lavar'},{id:6,name:'Xampu'},{id:7,name:'Video Game '},
  

]

const ComodidadesHomes = () => {
  let popupRef = React.createRef()
  
  const onShowPopup = () => {
    popupRef.show()
  }

  const onClosePopup = () =>{
    popupRef.close()
  }


  return (
    <Container>
      <TextTitle>COMODIDADES</TextTitle>
      <Item>Wifi<Incon/></Item>
      <Item>Estacionamento</Item><Incon source={{uri:'https://www.flaticon.com/svg/static/icons/svg/1159/1159499.svg'}}/>

      <ButtonExtend onPress={onShowPopup}><TextButton>VEJA MAIS</TextButton></ButtonExtend>
      <BottomPopup
        title="Comodidades"
        ref={(target) => popupRef = target}
        onTouchOutside = {onClosePopup}
        data={popuplist}
      />
    </Container>
  );
};

export default ComodidadesHomes;
