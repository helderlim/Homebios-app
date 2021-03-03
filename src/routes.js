import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Search from './pages/Search';
import Maps from './pages/Maps';
import FeedScreen from './routesButton';
import CadHomes from './pages/CadHomes';
import ListPersonscreen from './routesPerson';



//BOTTOM NAVIGATION 
const { Navigator, Screen } = createBottomTabNavigator();
//rotas do app 
function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            height: 60,

            borderTopWidth: 0,
          },
          tabStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
          },
          labelStyle: {

            fontSize: 11,
            marginTop: 5,
          },

        }}
      >
        <Screen name="Feed" component={FeedScreen} options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons
                name='md-home'
                size={size}

              />
            )
          }
        }} />
        <Screen name="Explorar" component={Search}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Ionicons
                  name='md-search'
                  size={size}

                />
              )
            }
          }} />

        <Screen name="Maps" component={Maps}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Ionicons
                  name='md-map'
                  size={size}

                />
              )
            }
          }} />

        <Screen name="Imovel" component={CadHomes}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Ionicons
                  name="md-today"
                  size={size}

                />
              )
            }
          }} />

        <Screen name="Perfil" component={ListPersonscreen}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Ionicons
                  name='md-person'
                  size={size}

                />
              )
            }
          }} />
      </Navigator>




    </NavigationContainer>

  )
}

export default Routes;

