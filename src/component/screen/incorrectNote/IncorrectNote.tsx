import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {MainStackNavigation} from '../../navigation/types';
import Header from './Header';

const IncorrectNote = () => {
  const mainStackNavigation = useNavigation<MainStackNavigation>();

  const onPressBack = () => {
    mainStackNavigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header onPressBack={onPressBack} />
      <View style={styles.body}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(IncorrectNote);
