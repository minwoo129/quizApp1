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
});

export const QuizContextProvider: ProviderType = ({children}) => {
  const [categoryIdx, setCategoryIdx] = useState(defState.categoryIdx);
  const [levelIdx, setLevelIdx] = useState(defState.levelIdx);
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
      }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
