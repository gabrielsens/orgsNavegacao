import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import Routes from './src/Routes/index';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Routes />
    </SafeAreaView>
  );
}
