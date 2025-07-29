import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomePage from './src/components/pages/HomePage';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <HomePage />
    </SafeAreaView>
  );
};

export default App;
