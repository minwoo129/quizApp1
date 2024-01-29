import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {QuizResultFooterProps} from './types';
import CommonButton from '../../../common/CommonButton';

const QuizResultFooter: FC<QuizResultFooterProps> = ({
  onPressRetest,
  onPressIncorrectNote,
}) => {
  return (
    <View style={styles.container}>
      <CommonButton
        title="다시 풀기"
        onPress={onPressRetest}
        style={styles.retestBtn}
        titleStyle={styles.btnTxt}
      />
      <CommonButton
        title="오답노트"
        onPress={onPressIncorrectNote}
        style={styles.incorrectNoteBtn}
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
  retestBtn: {
    flex: 1,
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    marginRight: 4,
  },
  incorrectNoteBtn: {
    flex: 1,
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e74c3c',
    marginLeft: 4,
  },
  btnTxt: {
    fontSize: 15,
    color: '#fff',
  },
});

export default React.memo(QuizResultFooter);
