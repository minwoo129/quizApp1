import {PayloadAction} from '@reduxjs/toolkit';
import {Question, QuizRecord} from '../../state/AdditionalTypes';

export type getQuestionsResponse = {
  response_code: number;
  results: Question[];
};

export type clearQuizDataAction = PayloadAction<undefined>;

export type setQuizRecordsAction = PayloadAction<QuizRecord[]>;
