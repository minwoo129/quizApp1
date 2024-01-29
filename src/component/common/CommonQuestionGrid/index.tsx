import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AnswerBtnProps, CommonQuestionGridProps} from './types';
import {Button} from '@ui-kitten/components';

const CommonQuestionGrid: FC<CommonQuestionGridProps> = ({
  question,
  onSelectAnswer,
  customStyle,
  answerViewCustomStyle,
}) => {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  const {answers, correct_answer} = question;

  const answerIdx = answers.indexOf(correct_answer);

  const onPressAnswer = (idx: number) => {
    if (selectedIdx !== -1) return;
    setSelectedIdx(idx);
    const selectValue = answers[idx];
    const correctValue = answers[answerIdx];
    onSelectAnswer(selectValue, correctValue);
  };

  return (
    <View style={[styles.container, customStyle]}>
      <Text style={styles.questionTxt}>{`문제: ${question.question}`}</Text>
      <View style={[styles.answerGrid, answerViewCustomStyle]}>
        {answers.map((item, idx) => {
          return (
            <AnswerBtn
              answer={item}
              onPress={() => onPressAnswer(idx)}
              answerIdx={answerIdx}
              idx={idx}
              selectedIdx={selectedIdx}
              key={idx}
            />
          );
        })}
      </View>
    </View>
  );
};

const AnswerBtn: FC<AnswerBtnProps> = ({
  answer,
  onPress,
  idx,
  answerIdx,
  selectedIdx,
}) => {
  let status = 'basic';

  if (selectedIdx !== -1) {
    // 선택한 idx와 이 아이템의 idx가 같을 때
    if (idx === selectedIdx) {
      // 정답 idx와 이 아이템의 idx가 같을 때(정답을 선택한 경우)
      if (answerIdx === selectedIdx) {
        status = 'success';
      }
      // 오답을 선택한 경우
      else {
        status = 'danger';
      }
    } else {
      // 오답을 선택했을 때 실제 정답 아이템의 상태 변경
      if (answerIdx === idx) {
        status = 'success';
      }
    }
  }
  return (
    <Button
      style={styles.answerBtn}
      appearance={'outline'}
      status={status}
      onPress={onPress}>
      {answer}
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  questionTxt: {
    fontSize: 15,
    color: '#000',
  },
  answerGrid: {
    width: '100%',
  },
  answerBtn: {
    width: '100%',
    height: 50,
    marginTop: 10,
  },
});

export default React.memo(CommonQuestionGrid);
