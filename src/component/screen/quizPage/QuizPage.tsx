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
import CommonPicker from '../../common/CommonPicker';

const QuizPage = () => {
  const dispatch = useAppDispatch();

  const mainStackNavigation = useNavigation<MainStackNavigation>();

  const questions = useAppSelector(state => state.quiz.questions);
  const categorys = useAppSelector(state => state.quiz.categorys);

  const categoryTitles = Object.keys(categorys);
  const [categoryIdx, setCategoryIdx] = useState(0);

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

  return (
    <SafeAreaView style={styles.container}>
      <Header onPressBack={onPressBack} />

      <CommonPicker
        datas={categoryTitles}
        onSelect={onSelectCategory}
        selectedIdx={categoryIdx}
        title="카테고리를 선택해주세요."
        customStyle={styles.categoryPicker}
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
});

export default React.memo(QuizPage);
