import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {QuizItemProps} from './types';
import CommonQuizAnaswer from '../../../common/CommonQuizAnaswer';

const QuizItem: FC<QuizItemProps> = ({question, idx}) => {
  const {isPass, answers, correct_answer, selectAnswer} = question;

  if (isPass) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.questionNumber}>{`문제 ${idx + 1}`}</Text>
      <Text style={styles.questionTxt}>{question.question}</Text>
      <View style={styles.answerView}>
        {answers.map((item, index) => {
          return (
            <CommonQuizAnaswer
              answerIdx={index + 1}
              correctAnswer={correct_answer}
              selectedAnswer={selectAnswer}
              key={index}>
              {item}
            </CommonQuizAnaswer>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 16,
  },
  questionNumber: {
    fontSize: 18,
    color: '#757575',
  },
  questionTxt: {
    fontSize: 15,
    color: '#000',
    marginTop: 10,
  },
  answerView: {
    width: '100%',
    marginTop: 10,
  },
  answer: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default React.memo(QuizItem);
