import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';
import Coracao from '../assets/coracao.svg';
import Home from '../assets/home.svg';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2a9f85',
          tabBarInactiveTintColor: '#c7c7c7',
        }}>
        <Tab.Screen
          name="Home"
          component={ProdutorRotas}
          options={{tabBarIcon: Home}}
        />
        <Tab.Screen
          name="Melhores produtores"
          component={MelhoresProdutoresRotas}
          options={{tabBarIcon: Coracao}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
