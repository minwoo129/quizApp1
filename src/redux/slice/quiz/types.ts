import {PayloadAction} from '@reduxjs/toolkit';
import {
  IncorrectQuizRecord,
  Question,
  QuizRecord,
} from '../../state/AdditionalTypes';
import {QuestionAnswer} from '../../../component/common/CommonQuestionGrid/types';

export type getQuestionsResponse = {
  response_code: number;
  results: Question[];
};

export type clearQuizDataAction = PayloadAction<undefined>;

export type setQuizRecordsAction = PayloadAction<setQuizRecordsArgs>;

type setQuizRecordsArgs = {
  quizRecords: QuizRecord[];
  incorrectRecords: IncorrectQuizRecord[];
};

export type addQuizRecordAction = PayloadAction<QuizRecord>;
