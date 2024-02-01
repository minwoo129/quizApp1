import React, {FC} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {IncorrectQuizItemProps} from './types';
import dayjs from 'dayjs';

const IncorrectQuizItem: FC<IncorrectQuizItemProps> = ({
  record,
  isLastIdx,
  onPressQuizItem,
}) => {
  const {question, idx, createdAt, quizIdx, answerIdx} = record;
  const {category} = question;

  const createdAtTxt = dayjs(createdAt).format('YYYY년 MM월 DD일');
  const marginBottom = isLastIdx ? 12 : 0;
  return (
    <TouchableOpacity
      style={[styles.container, {marginBottom}]}
      onPress={() => onPressQuizItem(record)}>
      <Text style={styles.quizNumTxt}>{`${quizIdx + 1}회 ${
        answerIdx + 1
      }번`}</Text>
      <Text style={styles.createdAt}>{`푼 날짜: ${createdAtTxt}`}</Text>
      <Text style={styles.categoryTxt}>{`카테고리: ${category}`}</Text>
    </TouchableOpacity>
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
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderRadius: 6,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  quizNumTxt: {
    fontSize: 18,
    color: '#212121',
    fontWeight: 'bold',
  },
  createdAt: {
    fontSize: 14,
    color: '#757575',
    marginTop: 8,
  },
  categoryTxt: {
    fontSize: 14,
    color: '#757575',
    marginTop: 8,
  },
});

export default React.memo(IncorrectQuizItem);
