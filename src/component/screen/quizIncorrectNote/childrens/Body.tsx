import React, {FC, useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {BodyProps} from './types';
import QuizContext from '../../../../contexts/QuizContext';
import QuizItem from './QuizItem';

const Body: FC<BodyProps> = ({}) => {
  const {state} = useContext(QuizContext);
  const {questionAnswers} = state;

  const incorrectQuestions = questionAnswers.filter(item => !item.isPass);

  if (incorrectQuestions.length === 0) {
    return (
      <View style={styles.container}>
        <Text>모든 문제를 맞췄습니다.</Text>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.listView}
      data={questionAnswers}
      keyExtractor={(item, idx) => idx.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={item => {
        return <QuizItem question={item.item} idx={item.index} />;
      }}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#e0e0e0',
  },
});

export default React.memo(Body);
