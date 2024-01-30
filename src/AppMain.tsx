import React, {FC, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppMainProps} from './types';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigatior from './component/navigation/RootStackNavigatior';
import {useAppDispatch} from './hooks';
import {getStorageData} from './storage';
import {QuizRecordData} from './storage/types';
import {setQuizRecords} from './redux/slice/quiz';

const AppMain: FC<AppMainProps> = ({}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    try {
      const quizRecords = await getQuizRecords();
      if (quizRecords) {
        dispatch(setQuizRecords(quizRecords.records));
      }
    } catch (e) {}
  };

  const getQuizRecords = async () => {
    try {
      const result = getStorageData<QuizRecordData>('quizRecord');
      return result;
    } catch (error) {
      return null;
    }
  };
  return (
    <>
      <NavigationContainer>
        <RootStackNavigatior />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(AppMain);
