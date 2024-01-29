import React, {FC, useContext} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {QuizResultProps} from '../types';
import QuizContext from '../../../../contexts/QuizContext';
import {AppColor} from '../../../common/Styles';
import TakenTime from '../childrens/TakenTime';
import QuizResultCount from '../childrens/QuizResultCount';
import QuizDetailResult from '../childrens/QuizDetailResult';
import QuizResultFooter from '../childrens/QuizResultFooter';

const QuizResult: FC<QuizResultProps> = ({visible}) => {
  const {state} = useContext(QuizContext);

  if (!visible) return null;
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.scrollInsideView}>
          <TakenTime />
          <QuizResultCount />
          <QuizDetailResult />
        </View>
      </ScrollView>
      <QuizResultFooter
        onPressRetest={() => {}}
        onPressIncorrectNote={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollInsideView: {
    width: '100%',
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
