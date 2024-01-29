import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {QuizQuestionFooterProps} from './types';
import CommonButton from '../../../common/CommonButton';

const QuizQuestionFooter: FC<QuizQuestionFooterProps> = ({
  visible,
  onPressNext,
}) => {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <CommonButton
        title="다음문제로 이동"
        onPress={onPressNext}
        style={styles.btn}
        titleStyle={styles.btnTxt}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  btnTxt: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default React.memo(QuizQuestionFooter);
