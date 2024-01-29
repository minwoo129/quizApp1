import React, {FC, useContext, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {clearQuizData, getQuestions} from '../../../redux/slice/quiz';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../navigation/types';
import Header from './Header';
import SelectQuizInfo from './pages/SelectQuizInfo';
import QuizContext from '../../../contexts/QuizContext';
import QuizQuestion from './pages/QuizQuestion';
import {convertGetQuestionsParams} from './ConvertData';

const QuizPage = () => {
  const dispatch = useAppDispatch();

  const mainStackNavigation = useNavigation<MainStackNavigation>();

  const questions = useAppSelector(state => state.quiz.questions);
  const categorys = useAppSelector(state => state.quiz.categorys);

  const [page, setPage] = useState(0);

  const {state, unmountQuizPage} = useContext(QuizContext);
  const {categoryIdx, levelIdx} = state;

  const categoryTitles = Object.keys(categorys);
  const levels = ['레벨 선택', '쉬움', '보통', '어려움'];

  const quizStartBtnDisabled = categoryIdx === 0 || levelIdx === 0;

  useEffect(() => {
    return () => {
      dispatch(clearQuizData());
      unmountQuizPage();
    };
  }, []);

  const _getQuestions = async () => {
    const categoryValue = categoryTitles[categoryIdx];
    const levelValue = levels[levelIdx];
    const params = convertGetQuestionsParams({
      categorys,
      categoryValue,
      levelValue,
    });
    try {
      await dispatch(
        getQuestions({
          params,
        }),
      );
    } catch (e) {
      __DEV__ && console.log('QuizPage _getQuestions error', e);
    }
  };

  const onPressBack = () => {
    mainStackNavigation.goBack();
  };

  const onPressQuizStart = () => {
    _getQuestions();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onPressBack={onPressBack} />

      <SelectQuizInfo
        visible={page === 0}
        categoryTitles={categoryTitles}
        levels={levels}
        onPressQuizStart={onPressQuizStart}
        quizStartBtnDisabled={quizStartBtnDisabled}
      />
      <QuizQuestion visible={page === 1} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
