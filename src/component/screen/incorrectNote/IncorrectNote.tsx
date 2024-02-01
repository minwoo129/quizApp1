import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../../../hooks';
import Header from './Header';
import Body from './Body';
import {onPressQuizItem} from './types';

const IncorrectNote = () => {
  const incorrectQuizRecords = useAppSelector(
    state => state.quiz.incorrectQuizRecords,
  );
  const quizRecords = useAppSelector(state => state.quiz.quizRecords);

  const onPressQuizItem: onPressQuizItem = item => {
    console.log('onPressQuizItem', item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body
        incorrectQuizRecords={incorrectQuizRecords}
        quizRecords={quizRecords}
        onPressQuizItem={onPressQuizItem}
      />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(IncorrectNote);
