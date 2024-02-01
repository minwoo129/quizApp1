import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {QuizExplanProps} from './types';
import CommonQuizAnaswer from '../../common/CommonQuizAnaswer';

const QuizExplan: FC<QuizExplanProps> = ({record}) => {
  const {answers, correct_answer, selectAnswer} = record.question;
  return (
    <View style={styles.container}>
      {answers.map((item, idx) => {
        return (
          <CommonQuizAnaswer
            answerIdx={idx + 1}
            correctAnswer={correct_answer}
            selectedAnswer={selectAnswer}
            key={idx}>
            {item}
          </CommonQuizAnaswer>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  answer: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default React.memo(QuizExplan);
