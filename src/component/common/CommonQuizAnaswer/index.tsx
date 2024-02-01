import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CommonQuizAnaswerProps} from './types';
import QuizItemBadge from '../QuizItemBadge';

const CommonQuizAnaswer: FC<CommonQuizAnaswerProps> = ({
  answerIdx,
  correctAnswer,
  selectedAnswer,
  children,
  customStyle,
}) => {
  const isSelected = selectedAnswer === children;
  const isCorrect = correctAnswer === children;
  return (
    <Text style={customStyle ?? styles.answer}>
      <Text style={{color: '#757575'}}>{`${answerIdx}번: ${children} `}</Text>
      <QuizItemBadge isSelected={isSelected} isCorrect={isCorrect} />
    </Text>
  );
};

const styles = StyleSheet.create({
  answer: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default React.memo(CommonQuizAnaswer);
