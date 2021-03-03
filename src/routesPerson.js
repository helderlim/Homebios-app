import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Homes';
import Feed from './pages/Feed';
import Calendary from './pages/Calendar';
import TopPerson from './components/Person/TopPerson';
import CadastroHome from './pages/CadastroHome';
import ListPerson from './components/Person/ListPerson';
import Person from './pages/Person';
import PersonDados from './pages/Person/PersonDados';



function ListPersonscreen() {
  return (
    <Person/>
  );
}

const Stack = createStackNavigator();

function routesList() {
  return (
 
      <Stack.Navigator >
        <Stack.Screen name="List" component={ListPersonscreen} options={{ headerShown: false }} />
        <Stack.Screen name="CadImovel" component={CadastroHome}/>
        <Stack.Screen name="Dados Pessoais" component={PersonDados}/>
        <Stack.Screen name="Person" component={ListPerson}/>
      </Stack.Navigator>
    
  );
}

export default routesList;
