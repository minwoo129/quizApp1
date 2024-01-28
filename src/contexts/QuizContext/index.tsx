import React, {createContext} from 'react';
import {QuizContextType} from './types';
import {ProviderType} from '../types';

const QuizContext = createContext<QuizContextType>({});

export const QuizContextProvider: ProviderType = ({children}) => {
  return <QuizContext.Provider value={{}}>{children}</QuizContext.Provider>;
};

export default QuizContext;
