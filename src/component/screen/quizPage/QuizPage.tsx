import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  Button,
  IndexPath,
  Layout,
  Select,
  SelectItem,
} from '@ui-kitten/components';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {clearQuizData, getQuestions} from '../../../redux/slice/quiz';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../navigation/types';
import Header from './Header';
import SelectQuizInfo from './pages/SelectQuizInfo';

const QuizPage = () => {
  const dispatch = useAppDispatch();

  const mainStackNavigation = useNavigation<MainStackNavigation>();

  const questions = useAppSelector(state => state.quiz.questions);
  const categorys = useAppSelector(state => state.quiz.categorys);

  const [categoryIdx, setCategoryIdx] = useState(0);
  const [levelIdx, setLevelIdx] = useState(0);

  const categoryTitles = Object.keys(categorys);
  const levels = ['레벨 선택', '쉬움', '보통', '어려움'];

  useEffect(() => {
    return () => {
      dispatch(clearQuizData());
    };
  }, []);

  const _getQuestions = async () => {
    try {
      await dispatch(
        getQuestions({
          params: {
            amount: 10,
            type: 'multiple',
          },
        }),
      );
    } catch (e) {
      __DEV__ && console.log('QuizPage _getQuestions error', e);
    }
  };

  const onPressBack = () => {
    mainStackNavigation.goBack();
  };

  const onSelectCategory = (idx: number, value: string) => {
    setCategoryIdx(idx);
  };

  const onSelectLevel = (idx: number, value: string) => {
    setLevelIdx(idx);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onPressBack={onPressBack} />

      <SelectQuizInfo
        visible={true}
        categoryTitles={categoryTitles}
        levels={levels}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 48,
  },
  categoryPicker: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  levelPicker: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
});

export default React.memo(QuizPage);
