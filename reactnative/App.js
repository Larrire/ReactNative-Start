import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';
import MainTab from './src/navigators/MainTab';
import { Constants } from 'react-native-unimodules';
console.log(Constants.systemFonts);

const App = () => {

  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  )
}

export default App;