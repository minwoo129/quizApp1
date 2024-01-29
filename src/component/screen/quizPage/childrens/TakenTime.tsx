import React, {FC, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppColor} from '../../../common/Styles';
import {TakenTimeProps} from './types';
import QuizContext from '../../../../contexts/QuizContext';
import dayjs from 'dayjs';

const TakenTime: FC<TakenTimeProps> = ({}) => {
  const {state} = useContext(QuizContext);
  const {startTime, endTime} = state;
  let takenTimeValue = '0초';

  if (startTime && endTime) {
    let values: string[] = [];
    const start = dayjs(startTime);
    const end = dayjs(endTime);
    let takenTime = end.diff(start, 'second');
    values.unshift(`${takenTime % 60}초`);

    takenTime = Math.floor(takenTime / 60);
    if (takenTime > 0) {
      values.unshift(`${takenTime % 60}분`);
      takenTime = Math.floor(takenTime / 60);
      if (takenTime > 0) {
        values.unshift(`${takenTime}시간`);
      }
    }

    takenTimeValue = values.join(' ');
  }

  return (
    <Text style={styles.timeTxt}>
      <Text style={{color: '#757575'}}>{'총 소요시간: '}</Text>
      <Text style={{color: AppColor.main}}>{takenTimeValue}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  timeTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default React.memo(TakenTime);
