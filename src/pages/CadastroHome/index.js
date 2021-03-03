import React, { Component } from 'react';
import { Button, Alert, ScrollView } from 'react-native';


import { Container, Titulo, CadInput } from './styles';

export default class CadastroHome extends Component {
  constructor() {
    super()
    this.state = {
      titulo: '',
      endereco: '',
      estado: '',
      municipio:'',
      preco:'',
      descricao:'',
      comodidades:'',
      imagem:''
    }
  }

  changeTitulo(titulo) {
    this.setState({ titulo })
  }

  changeEndereco(endereco){
    this.setState({endereco})
  }
  changeEstado(estado){
    this.setState({estado})
  }
  
  changeMunicipio(municipio){
    this.setState({municipio})
  }
  changePreco(preco){
    this.setState({preco})
  }
  changeDescricao(descricao){
    this.setState({descricao})
  }
  changeComodidades(comodidades){
    this.setState({comodidades})
  }
  changeImagem(imagem){
    this.setState({imagem})
  }

  


  buttonOnpress() {
    const data = [this.state.titulo, this.state.endereco, this.state.estado, this.state.municipio,
    this.state.preco, this.state.descricao, this.state.comodidades, this.state.imagem
    ];

    Alert.alert(this.state.titulo +'  Foi cadastrado com sucesso')
    fetch('http://192.168.5.106:4541/cadimovel', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),

  })
  
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    
    })
    .catch((error) => {
      console.error('Error:', error);
     
    });
  }

  render() {
    return (
      <ScrollView>
      <Container style={{marginBottom:500,}}>

        <Titulo>Anunciar Imóvel</Titulo>
        <CadInput
          placeholder='Titulo'
          value={this.state.titulo}
          onChangeText={(titulo) => this.changeTitulo(titulo)}
        />
        <CadInput
          placeholder='Endereço'
          value={this.state.endereco}
          onChangeText={(endereco) => this.changeEndereco(endereco)}
        />
        <CadInput
          placeholder='Estado'
          value={this.state.estado}
          onChangeText={(estado) => this.changeEstado(estado)}
        />
        <CadInput
          placeholder='Municipio'
          value={this.state.municipio}
          onChangeText={(municipio) => this.changeMunicipio(municipio)}
        />
         <CadInput
          placeholder='Valor'
          keyboardType= 'numeric'
          value={this.state.preco}
          onChangeText={(preco) => this.changePreco(preco)}
        />
        <CadInput
          placeholder='Descrição'
          value={this.state.descricao}
          onChangeText={(descricao) => this.changeDescricao(descricao)}
        />
        <CadInput
          placeholder='Comodidaes'
          value={this.state.comodidades}
          onChangeText={(comodidades) => this.changeComodidades(comodidades)}
        />
        <CadInput
          placeholder='Imagem'
          value={this.state.imagem}
          onChangeText={(imagem) => this.changeImagem(imagem)}
        />

        <Button 
          title="enviar"
          color='red'
          
          onPress={()=> this.buttonOnpress()}
        />
      </Container>
      </ScrollView>
    );
  }
};

