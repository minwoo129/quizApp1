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
import {Provider} from 'react-redux';
import store from './redux/store';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <Provider store={store}>
          <ContextProvider contexts={[QuizContextProvider]}>
            <AppMain />
          </ContextProvider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
