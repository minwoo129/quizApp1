import React, {FC, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {QuizResultProps} from '../types';
import QuizContext from '../../../../contexts/QuizContext';
import {AppColor} from '../../../common/Styles';
import TakenTime from '../childrens/TakenTime';
import QuizResultCount from '../childrens/QuizResultCount';
import QuizDetailResult from '../childrens/QuizDetailResult';

const QuizResult: FC<QuizResultProps> = ({visible}) => {
  const {state} = useContext(QuizContext);

  if (!visible) return null;
  return (
    <View style={styles.container}>
      <TakenTime />
      <QuizResultCount />
      <QuizDetailResult />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  timeTxt: {
    fontSize: 18,
    color: '#757575',
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default React.memo(QuizResult);
