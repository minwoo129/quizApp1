import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {QuizInfoProps} from './types';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

const QuizInfo: FC<QuizInfoProps> = ({record}) => {
  const {quizIdx, answerIdx, createdAt} = record;
  const createdAtTxt = dayjs(createdAt).format('LLLL');
  return (
    <View style={styles.container}>
      <Text style={styles.quizNo}>{`${quizIdx + 1}회 ${answerIdx + 1}번`}</Text>
      <Text style={styles.createdAt}>{`${createdAtTxt}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderColor: '#E0E0E0',
    borderBottomWidth: 1,
  },
  quizNo: {
    fontSize: 18,
    color: '#000',
  },
  createdAt: {
    fontSize: 14,
    color: '#757575',
    marginTop: 8,
  },
});

export default React.memo(QuizInfo);
