import React, {createContext, useState} from 'react';
import {QuizContextType, addQuestionAnswer} from './types';
import {ProviderType} from '../types';
import {
  QuizContextDefaultState as defState,
  QuizContextDefaultSetState as defSetState,
} from './defaultState';

const QuizContext = createContext<QuizContextType>({
  state: defState,
  setState: defSetState,
  unmountQuizPage: () => {},
  addQuestionAnswer: () => {},
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

  const unmountQuizPage = () => {
    setCategoryIdx(defState.categoryIdx);
    setLevelIdx(defState.levelIdx);
    setCurrentQuestionIdx(defState.currentQuestionIdx);
    setQuestionAnswers(defState.questionAnswers);
  };

  const addQuestionAnswer: addQuestionAnswer = answer => {
    let newAnswers = [...questionAnswers];
    newAnswers.push(answer);
    setQuestionAnswers(newAnswers);
  };

  return (
    <QuizContext.Provider
      value={{
        state: {
          categoryIdx,
          levelIdx,
          currentQuestionIdx,
          questionAnswers,
        },
        setState: {
          setCategoryIdx,
          setLevelIdx,
          setCurrentQuestionIdx,
          setQuestionAnswers,
        },
        unmountQuizPage,
        addQuestionAnswer,
      }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
