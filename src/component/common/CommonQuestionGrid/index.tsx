import React, {FC, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {AnswerBtnProps, CommonQuestionGridProps, QuestionAnswer} from './types';
import {Button} from '@ui-kitten/components';
import {AppColor} from '../Styles';

const CommonQuestionGrid: FC<CommonQuestionGridProps> = ({
  visible = true,
  idx,
  question,
  onSelectAnswer,
  customStyle,
  answerViewCustomStyle,
}) => {
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const [isPass, setPass] = useState(false);

  const color = isPass ? AppColor.main : '#e67e22';
  const isPassValue = isPass ? '정답입니다.' : '오답입니다.';

  const {answers, correct_answer} = question;

  const answerIdx = answers.indexOf(correct_answer);

  const onPressAnswer = (idx: number) => {
    if (selectedIdx !== -1) return;
    setSelectedIdx(idx);
    const selectValue = answers[idx];
    const correctValue = answers[answerIdx];
    const isPass = correctValue === selectValue;
    setPass(isPass);
    let answerData: QuestionAnswer = {
      ...question,
      selectAnswer: selectValue,
      isPass,
    };
    onSelectAnswer(answerData);
  };

  if (!visible) return null;
  return (
    <ScrollView
      style={[styles.container, customStyle]}
      showsVerticalScrollIndicator={false}>
      <View style={{width: '100%'}}>
        <Text
          style={
            styles.questionTxt
          }>{`문제 ${idx}: ${question.question}`}</Text>
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
      {selectedIdx !== -1 && (
        <Text style={[styles.isPassTxt, {color}]}>{isPassValue}</Text>
      )}
      {selectedIdx !== -1 && (
        <Text style={styles.correctAnswerTxt}>{`정답: ${correct_answer}`}</Text>
      )}
    </ScrollView>
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
  isPassTxt: {
    marginTop: 20,
    fontSize: 15,
  },
  correctAnswerTxt: {
    fontSize: 15,
    color: '#000',
  },
});

export default React.memo(CommonQuestionGrid);
