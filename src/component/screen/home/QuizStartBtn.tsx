import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {QuizStartBtnProps} from './types';
import CommonButton from '../../common/CommonButton';
import {AppColor} from '../../common/Styles';

const QuizStartBtn: FC<QuizStartBtnProps> = ({onPressQuizStart}) => {
  return (
    <CommonButton
      title="퀴즈 시작"
      onPress={onPressQuizStart}
      style={styles.button}
      titleStyle={styles.title}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    backgroundColor: AppColor.main,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    color: '#fff',
  },
});

export default React.memo(QuizStartBtn);
