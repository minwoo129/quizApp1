import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {QuizQuestionProps} from '../types';
import {QuestionItem} from '../../../../redux/state/AdditionalTypes';
import CommonQuestionGrid from '../../../common/CommonQuestionGrid';

const QuizQuestion: FC<QuizQuestionProps> = ({visible}) => {
  const testQuestion: QuestionItem = {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'easy',
    question: 'Which of these is NOT a game under the Worms series?',
    correct_answer: 'Worms: Ultimate Mayhem',
    incorrect_answers: [
      'Worms: Reloaded',
      'Worms: Revolution',
      'Worms: Open Warfare',
    ],
    answers: [
      'Worms: Ultimate Mayhem',
      'Worms: Reloaded',
      'Worms: Revolution',
      'Worms: Open Warfare',
    ],
  };
  const onSelectAnswer = (selectValue: string, correctValue: string) => {
    console.log('onSelectAnswer');
  };

  if (!visible) return null;
  return (
    <View style={styles.container}>
      <CommonQuestionGrid
        question={testQuestion}
        onSelectAnswer={onSelectAnswer}
        customStyle={styles.questionGrid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  questionGrid: {
    paddingHorizontal: 16,
  },
});

export default React.memo(QuizQuestion);
