import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {BodyProps} from './types';
import IncorrectQuizItem from './IncorrectQuizItem';

const Body: FC<BodyProps> = ({incorrectQuizRecords, quizRecords}) => {
  if (quizRecords.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyTxt}>{'현재까지 푼 퀴즈가 없어요'}</Text>
      </View>
    );
  }
  if (incorrectQuizRecords.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyTxt}>
          {'현재까지 모든 문제를 맞췄어요.\n잘 하셨어요!!'}
        </Text>
      </View>
    );
  }

  const datas = [...incorrectQuizRecords].sort((a, b) => b.idx - a.idx);
  return (
    <View style={{flex: 1, paddingHorizontal: 16}}>
      <FlatList
        style={styles.listView}
        data={datas}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item.idx}`}
        renderItem={item => {
          return (
            <IncorrectQuizItem
              record={item.item}
              isLastIdx={item.index === incorrectQuizRecords.length - 1}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  emptyTxt: {
    fontSize: 18,
    color: '#757575',
    textAlign: 'center',
  },
  listView: {
    flex: 1,
  },
});

export default React.memo(Body);
