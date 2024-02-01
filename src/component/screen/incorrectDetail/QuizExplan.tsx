import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {QuizExplanProps} from './types';
import QuizItemBadge from '../../common/QuizItemBadge';

const QuizExplan: FC<QuizExplanProps> = ({record}) => {
  const {answers, correct_answer, selectAnswer} = record.question;
  return (
    <View style={styles.container}>
      {answers.map((item, idx) => {
        return (
          <Text style={styles.answer} key={idx}>
            <Text style={{color: '#757575'}}>{`${idx + 1}번: ${item} `}</Text>
            <QuizItemBadge
              isSelected={item === selectAnswer}
              isCorrect={item === correct_answer}
            />
          </Text>
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
