import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, View, Image, Alert} from 'react-native';


export default class CadHomes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: [],
      id:''
    }
  }
  componentDidMount() {
    fetch('http://192.168.5.106:4541/consultaimovel')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson
        })
      })
  }
  remove(){
    
       Alert.alert('Funcionamento na próxima autalização')
      
  }

  _renderItem = ({ item, index }) => {
    const codigo = item.idimovel
    return (
      <View style={styles.item}>
        <Image style={{ width: 100, height: 100, alignSelf:'center' }} source={{ uri: item.imagem }} />
        
        <Text style={{ alignSelf:'center'}}>Titulo: {item.titulo}  </Text>
        <Text>Descrição: {item.descricao}</Text>
        <Text>UF: {item.estado}</Text>
        <Text>Municipio: {item.municipio}</Text>
        <Text>Endereço: {item.endereco}</Text>
        <Text>Codigo: {codigo}</Text>

        <Button 
        title="Apagar" 
        onPress={()=> this.remove()}
        />
       
      </View>
    )
  }

  render() {
    let { dataSource, isLoading } = this.state
    return (
      <View style={styles.container}>
         <Button style={{marginTop:100,}}
        title="atualizar lista" 
        onPress={()=> this.componentDidMount()}
        />
        <FlatList
          data={dataSource}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
  },
  item: {
    padding: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  button:{
    height:500,
    width:500,
    color:'red'
  }
});
