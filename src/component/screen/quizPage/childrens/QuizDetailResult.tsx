import React, {FC, useContext} from 'react';
import {Platform, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {QuizDetailResultItemProps, QuizDetailResultProps} from './types';
import {AppColor} from '../../../common/Styles';
import QuizContext from '../../../../contexts/QuizContext';

const QuizDetailResult: FC<QuizDetailResultProps> = ({}) => {
  const {state} = useContext(QuizContext);
  const {questionAnswers} = state;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>문제 현황</Text>

      {questionAnswers.map((item, idx) => {
        return <QuizDetailResultItem answerData={item} idx={idx} key={idx} />;
      })}
    </View>
  );
};

const QuizDetailResultItem: FC<QuizDetailResultItemProps> = ({
  answerData,
  idx,
}) => {
  const {wrong, correct} = AppColor.text;
  let resultValue = '',
    color = '';
  if (answerData.isPass) {
    resultValue = '정답';
    color = correct;
  } else {
    resultValue = '오답';
    color = wrong;
  }

  return (
    <View style={styles.itemView}>
      <Text style={styles.itemTitle}>{`${idx + 1}번`}</Text>
      <Text style={[styles.itemValue, {color}]}>{resultValue}</Text>
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#757575',
  },
  itemView: {
    width: '100%',
    height: 44,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 32,
    ...shadow,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#757575',
  },
  itemValue: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 20,
  },
});

export default React.memo(QuizDetailResult);
