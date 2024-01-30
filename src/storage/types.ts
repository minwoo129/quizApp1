import {QuestionAnswer} from '../component/common/CommonQuestionGrid/types';

export type storageKey = 'quizRecord';

export type setStorageDataType = (args: setStorageDataArgs) => Promise<void>;

export type setStorageDataArgs = quizRecordDataArgs;
type quizRecordDataArgs = {
  key: 'quizRecord';
  value: QuizRecord[];
};

export type getStorageDataType = <T = any>(
  key: storageKey,
) => Promise<T | null>;

export interface QuizRecord {
  startTime: string;
  endTime: string;
  createdAt: string;
  idx: number;
  questionAnswers: QuestionAnswer[];
  result: QuizRecordResult;
}

export interface QuizRecordResult {
  correctCount: number;
  wrongCount: number;
}
