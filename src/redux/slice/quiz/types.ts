import {PayloadAction} from '@reduxjs/toolkit';
import {Question} from '../../state/AdditionalTypes';

export type getQuestionsResponse = {
  response_code: number;
  results: Question[];
};

export type clearQuizDataAction = PayloadAction<undefined>;
