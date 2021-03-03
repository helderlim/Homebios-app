import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PersonDados from './pages/Person/PersonDados';
import  Person  from './pages/Person/index';



function PersonScreen({navigation}){
  return(
    <Person/>
  )
}



const Stack = createStackNavigator();

function RoutesPropri() {
  return (
 
      <Stack.Navigator >
         <Stack.Screen name="Person" component={PersonScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Proprietario" component={PersonDados} />
       

      </Stack.Navigator>
    
  );
}

export default RoutesPropri;
