/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppMain from './AppMain';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ContextProvider from './contexts';
import {QuizContextProvider} from './contexts/QuizContext';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <ContextProvider contexts={[QuizContextProvider]}>
          <AppMain />
        </ContextProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
