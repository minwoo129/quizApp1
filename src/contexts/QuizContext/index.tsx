import React, {createContext, useState} from 'react';
import {QuizContextType, addQuestionAnswer} from './types';
import {ProviderType} from '../types';
import {
  QuizContextDefaultState as defState,
  QuizContextDefaultSetState as defSetState,
} from './defaultState';
import dayjs from 'dayjs';

const QuizContext = createContext<QuizContextType>({
  state: defState,
  setState: defSetState,
  unmountQuizPage: () => {},
  addQuestionAnswer: () => {},
  clearForRetest: () => {},
});

export const QuizContextProvider: ProviderType = ({children}) => {
  const [categoryIdx, setCategoryIdx] = useState(defState.categoryIdx);
  const [levelIdx, setLevelIdx] = useState(defState.levelIdx);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(
    defState.currentQuestionIdx,
  );
  const [questionAnswers, setQuestionAnswers] = useState(
    defState.questionAnswers,
  );
  const [startTime, setStartTime] = useState(defState.startTime);
  const [endTime, setEndTime] = useState(defState.endTime);

  const unmountQuizPage = () => {
    setCategoryIdx(defState.categoryIdx);
    setLevelIdx(defState.levelIdx);
    setCurrentQuestionIdx(defState.currentQuestionIdx);
    setQuestionAnswers(defState.questionAnswers);
    setStartTime(defState.startTime);
    setEndTime(defState.endTime);
  };

  const addQuestionAnswer: addQuestionAnswer = answer => {
    let newAnswers = [...questionAnswers];
    newAnswers.push(answer);
    setQuestionAnswers(newAnswers);
  };

  const clearForRetest = () => {
    setStartTime(dayjs().format('YYYY-MM-DD HH:mm:ss'));
    setEndTime(defState.endTime);
    setCurrentQuestionIdx(defState.currentQuestionIdx);
    setQuestionAnswers(defState.questionAnswers);
  };

  return (
    <QuizContext.Provider
      value={{
        state: {
          categoryIdx,
          levelIdx,
          currentQuestionIdx,
          questionAnswers,
          startTime,
          endTime,
        },
        setState: {
          setCategoryIdx,
          setLevelIdx,
          setCurrentQuestionIdx,
          setQuestionAnswers,
          setStartTime,
          setEndTime,
        },
        unmountQuizPage,
        addQuestionAnswer,
        clearForRetest,
      }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
