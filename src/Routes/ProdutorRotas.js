import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Produtor from '../telas/Produtor';
import Home from '../telas/Home';

const Stack = createNativeStackNavigator();

export default function ProdutorRotas({component = Home}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={component} />
      <Stack.Screen name="Produtor" component={Produtor} />
    </Stack.Navigator>
  );
}
