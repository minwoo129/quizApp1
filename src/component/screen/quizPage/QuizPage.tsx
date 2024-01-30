import React, {FC, useContext, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {
  addQuizRecord,
  clearQuizData,
  getQuestions,
} from '../../../redux/slice/quiz';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../navigation/types';
import Header from './Header';
import SelectQuizInfo from './pages/SelectQuizInfo';
import QuizContext from '../../../contexts/QuizContext';
import QuizQuestion from './pages/QuizQuestion';
import {convertGetQuestionsParams} from './ConvertData';
import CommonLoading from '../../common/CommonLoading';
import dayjs from 'dayjs';
import QuizResult from './pages/QuizResult';

const QuizPage = () => {
  const dispatch = useAppDispatch();

  const mainStackNavigation = useNavigation<MainStackNavigation>();

  const categorys = useAppSelector(state => state.quiz.categorys);

  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const {state, setState, unmountQuizPage, clearForRetest, convertQuizRecord} =
    useContext(QuizContext);
  const {categoryIdx, levelIdx} = state;
  const {setStartTime, setEndTime} = setState;

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
    setLoading(true);
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
      setPage(1);
      setStartTime(dayjs().format('YYYY-MM-DD HH:mm:ss'));
    } catch (e) {
      __DEV__ && console.log('QuizPage _getQuestions error', e);
    } finally {
      setLoading(false);
    }
  };

  const onPressBack = () => {
    mainStackNavigation.goBack();
  };

  const onPressQuizStart = () => {
    _getQuestions();
  };

  const onQuizFinished = () => {
    const endTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    setEndTime(endTime);
    const newRecord = convertQuizRecord(endTime);
    console.log('newRecord', newRecord);
    dispatch(addQuizRecord(newRecord));
    setPage(2);
  };

  const onPressRetest = () => {
    console.log('onPressRetest');
    clearForRetest();
    setPage(1);
  };

  const onPressIncorrectNote = () => {
    console.log('onPressIncorrectNote');
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
      <QuizQuestion visible={page === 1} onQuizFinished={onQuizFinished} />
      <QuizResult
        visible={page === 2}
        onPressIncorrectNote={onPressIncorrectNote}
        onPressRetest={onPressRetest}
      />

      <CommonLoading visible={loading} backgroundColor="#0006" />
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
