import React, {FC, useContext} from 'react';
import {Platform, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {QuizResultCountItemProps, QuizResultCountProps} from './types';
import QuizContext from '../../../../contexts/QuizContext';
import {AppColor} from '../../../common/Styles';

const QuizResultCount: FC<QuizResultCountProps> = ({}) => {
  const {state} = useContext(QuizContext);
  const {questionAnswers} = state;

  let totalCnt = 0,
    correctCnt = 0,
    wrongCnt = 0;

  if (questionAnswers.length > 0) {
    for (let answer of questionAnswers) {
      const {correct_answer, selectAnswer} = answer;
      totalCnt++;
      if (correct_answer === selectAnswer) correctCnt++;
      else wrongCnt++;
    }
  }
  return (
    <View style={styles.container}>
      <QuizResultCountItem title="총 문제수" count={totalCnt} type="total" />
      <QuizResultCountItem
        title="맞춘 문제수"
        count={correctCnt}
        type="correct"
      />
      <QuizResultCountItem title="틀린 문제수" count={wrongCnt} type="wrong" />
    </View>
  );
};

const QuizResultCountItem: FC<QuizResultCountItemProps> = ({
  title,
  count,
  type,
}) => {
  let color = '#757575';
  if (type === 'correct') color = AppColor.text.correct;
  else if (type === 'wrong') color = AppColor.text.wrong;

  return (
    <View style={styles.itemView}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={[styles.itemValue, {color}]}>{`${count}건`}</Text>
    </View>
  );
};

const shadow = Platform.select<ViewStyle>({
  ios: {
    shadowColor: '#00000029',
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  android: {
    elevation: 4,
  },
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    ...shadow,
    backgroundColor: '#fff',
    marginTop: 16,
  },
  itemView: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#757575',
  },
  itemValue: {
    fontSize: 15,
    marginTop: 10,
  },
});

export default React.memo(QuizResultCount);
