/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import RootNav from './src/nav';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';

function App(): React.JSX.Element {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff'
    },
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar
        barStyle={'light-content'}
      />
      <RecoilRoot>
        <NavigationContainer theme={MyTheme}>
          <RootNav />
        </NavigationContainer>
      </RecoilRoot>
    </SafeAreaView>
  );
}



export default App;
