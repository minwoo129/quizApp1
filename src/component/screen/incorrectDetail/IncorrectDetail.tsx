import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {MainStackNavigation, MainStackRouteProp} from '../../navigation/types';
import Header from './Header';
import QuizInfo from './QuizInfo';

const IncorrectDetail = () => {
  const route = useRoute<MainStackRouteProp<'IncorrectDetail'>>();
  const mainStackNavigation = useNavigation<MainStackNavigation>();

  const onPressBack = () => {
    mainStackNavigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header onPressBack={onPressBack} />
      <View style={styles.insideView}>
        <QuizInfo record={route.params.record} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  insideView: {
    flex: 1,
  },
});

export default React.memo(IncorrectDetail);
