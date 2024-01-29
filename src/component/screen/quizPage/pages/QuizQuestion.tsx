import React, {FC, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {QuizQuestionProps} from '../types';
import {QuestionItem} from '../../../../redux/state/AdditionalTypes';
import CommonQuestionGrid from '../../../common/CommonQuestionGrid';
import QuizQuestionFooter from '../childrens/QuizQuestionFooter';
import {QuestionAnswer} from '../../../common/CommonQuestionGrid/types';
import {useAppSelector} from '../../../../hooks';
import QuizContext from '../../../../contexts/QuizContext';

const QuizQuestion: FC<QuizQuestionProps> = ({visible, onQuizFinished}) => {
  const question = useAppSelector(state => state.quiz.questions);

  const {state, setState, addQuestionAnswer} = useContext(QuizContext);
  const {currentQuestionIdx, questionAnswers} = state;
  const {setCurrentQuestionIdx} = setState;

  const onSelectAnswer = (answerData: QuestionAnswer) => {
    addQuestionAnswer(answerData);
  };

  const onPressNext = () => {
    if (!question) return;
    if (questionAnswers.length === question.length) {
      onQuizFinished();
      return;
    }
    setCurrentQuestionIdx(currentQuestionIdx + 1);
  };

  if (!visible) return null;
  if (!question) return null;

  return (
    <View style={styles.container}>
      {question.map((item, idx) => {
        return (
          <CommonQuestionGrid
            visible={currentQuestionIdx === idx}
            idx={idx + 1}
            question={item}
            onSelectAnswer={onSelectAnswer}
            customStyle={styles.questionGrid}
            key={idx}
          />
        );
      })}
      <QuizQuestionFooter
        visible={currentQuestionIdx + 1 === questionAnswers.length}
        onPressNext={onPressNext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  questionGrid: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default React.memo(QuizQuestion);
