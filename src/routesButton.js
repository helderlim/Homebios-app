import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Homes';
import Feed from './pages/Feed';
import Calendary from './pages/Calendar';
import TopPerson from './components/Person/TopPerson';
import CadastroHome from './pages/CadastroHome';
import ListPerson from './components/Person/ListPerson';



function FeedScreen() {
  return (
    <Feed/>
  );
}

const Stack = createStackNavigator();

function RoutesButton() {
  return (
 
      <Stack.Navigator >
        <Stack.Screen name="Feed" component={FeedScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
        <Stack.Screen name="Agenda" component={Calendary}/>
        <Stack.Screen name="CadImovel" component={CadastroHome}/>
        <Stack.Screen name="Person" component={ListPerson}/>
      </Stack.Navigator>
    
  );
}

export default RoutesButton;
