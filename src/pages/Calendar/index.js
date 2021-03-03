import React, { Component } from 'react';
import { Alert, Text } from 'react-native';
import { Container, Label, ContainerInput, Botao, TextInput } from './styles';


class Calendary extends Component {
  constructor() {
    super()
    this.state = {
      diaout: '',
      diain: '',
      mesin: '',
      senha:'',
      endereco: '',
    }
  }

  changeDiaout(diaout){
    this.setState({diaout})
  }

  changeDiain(diain){
    this.setState({diain})
  }
  
  changeMesin(mesin){
    this.setState({mesin})
  }

  changeMesout(mesout){
    this.setState({mesout})
  }
  changeValor(valor){
    
    
  }


  buttonOnpress(){
    this.setState({ resultante: this.state.diaout - this.state.diain })
    this.setState({valor: this.state.resultante * 200})
    
  }

  buttonclose(){
    this.setState({senha: 'ABC123'})
    Alert.alert('Fechado com sucesso  ABC123 VALOR:'+this.state.valor)
  }


  render() {
    return (
      <Container>
        <Label>Checkin</Label>
        <ContainerInput>
          <TextInput
            placeholder='Dia'
            keyboardType='numeric'
            value={this.state.diain}
            onChangeText={(diain)=>this.changeDiain(diain)}
          />
          <TextInput
            placeholder='Mês'
            keyboardType='numeric'
            value={this.state.mesin}
            onChangeText={(mesin)=>this.changeMesin(mesin)}
          />
        </ContainerInput>

        <Label>Checkout</Label>
        <ContainerInput>
          <TextInput
            placeholder='Dia'
            keyboardType='numeric'
            value={this.state.diaout}
            onChangeText={(diaout) => this.changeDiaout(diaout)}
          />
          <TextInput
            placeholder='Mês'
            keyboardType='numeric'
            value={this.state.mesout}
            onChangeText={(mesout)=>this.changeMesout(mesout)}
          />
        </ContainerInput>
        <Botao
        onPress={()=> this.buttonOnpress()}
        ><Text style={{ color: 'white', fontSize: 18, }}>Calcular</Text></Botao>
        <Text style={{ fontSize: 20 }}>Diaria:R$200</Text>
        <Text style={{ fontSize: 20 }}>Senha:{this.state.senha}</Text>
        <Text style={{ fontSize: 20 }}>Valor:R${this.state.valor}</Text>

        <Botao
        onPress={()=>this.buttonclose()}
        ><Text style={{ color: 'white', fontSize: 18, }}>Fechar estadia</Text></Botao>
      </Container>
    );
  }
};

export default Calendary;

