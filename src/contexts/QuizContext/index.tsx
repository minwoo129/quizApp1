import React, {createContext, useState} from 'react';
import {QuizContextType} from './types';
import {ProviderType} from '../types';
import {
  QuizContextDefaultState as defState,
  QuizContextDefaultSetState as defSetState,
} from './defaultState';

const QuizContext = createContext<QuizContextType>({
  state: defState,
  setState: defSetState,
  unmountQuizPage: () => {},
});

export const QuizContextProvider: ProviderType = ({children}) => {
  const [categoryIdx, setCategoryIdx] = useState(defState.categoryIdx);
  const [levelIdx, setLevelIdx] = useState(defState.levelIdx);

  const unmountQuizPage = () => {
    setCategoryIdx(defState.categoryIdx);
    setLevelIdx(defState.levelIdx);
  };

  return (
    <QuizContext.Provider
      value={{
        state: {
          categoryIdx,
          levelIdx,
        },
        setState: {
          setCategoryIdx,
          setLevelIdx,
        },
        unmountQuizPage,
      }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
