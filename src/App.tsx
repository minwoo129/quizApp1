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
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <Provider store={store}>
          <ApplicationProvider {...eva} theme={eva.light}>
            <ContextProvider contexts={[QuizContextProvider]}>
              <AppMain />
            </ContextProvider>
          </ApplicationProvider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
