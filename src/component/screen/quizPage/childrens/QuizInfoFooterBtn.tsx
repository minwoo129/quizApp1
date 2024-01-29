import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {QuizInfoFooterBtnProps} from './types';
import CommonButton from '../../../common/CommonButton';

const QuizInfoFooterBtn: FC<QuizInfoFooterBtnProps> = ({
  onPressQuizStart,
  quizStartBtnDisabled,
}) => {
  const backgroundColor = quizStartBtnDisabled ? '#bdc3c7' : '#2ecc71';
  return (
    <View style={styles.container}>
      <CommonButton
        title="퀴즈 시작하기"
        onPress={onPressQuizStart}
        style={[styles.button, {backgroundColor}]}
        titleStyle={styles.buttonTxt}
        disabled={quizStartBtnDisabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  button: {
    width: '100%',
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxt: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default React.memo(QuizInfoFooterBtn);
