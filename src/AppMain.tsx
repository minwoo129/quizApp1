import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppMainProps} from './types';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigatior from './component/navigation/RootStackNavigatior';

const AppMain: FC<AppMainProps> = ({}) => {
  return (
    <>
      <NavigationContainer>
        <RootStackNavigatior />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(AppMain);
