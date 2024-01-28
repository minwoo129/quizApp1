import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {QuizPageProps} from './types';

const QuizPage: FC<QuizPageProps> = ({}) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(QuizPage);
