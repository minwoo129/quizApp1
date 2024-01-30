import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../../../hooks';
import Header from './Header';
import Body from './Body';

const IncorrectNote = () => {
  const incorrectQuizRecords = useAppSelector(
    state => state.quiz.incorrectQuizRecords,
  );
  const quizRecords = useAppSelector(state => state.quiz.quizRecords);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body
        incorrectQuizRecords={incorrectQuizRecords}
        quizRecords={quizRecords}
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
