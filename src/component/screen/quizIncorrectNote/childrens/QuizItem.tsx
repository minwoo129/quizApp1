import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {QuizItemBadgeProps, QuizItemProps} from './types';
import {AppColor} from '../../../common/Styles';

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
            <Text style={styles.answer} key={index}>
              <Text style={{color: '#757575'}}>{`${
                index + 1
              }번: ${item} `}</Text>
              <QuizItemBadge
                isSelected={item === selectAnswer}
                isCorrect={item === correct_answer}
              />
            </Text>
          );
        })}
      </View>
    </View>
  );
};

const QuizItemBadge: FC<QuizItemBadgeProps> = ({isSelected, isCorrect}) => {
  if (isSelected) {
    return <Text style={{color: AppColor.text.wrong}}>{'(선택한 답)'}</Text>;
  }

  if (isCorrect) {
    return <Text style={{color: AppColor.text.correct}}>{'(정답)'}</Text>;
  }

  return null;
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
