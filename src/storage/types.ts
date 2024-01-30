import {QuestionAnswer} from '../component/common/CommonQuestionGrid/types';
import {IncorrectQuizRecord, QuizRecord} from '../redux/state/AdditionalTypes';

export type storageKey = 'quizRecord';

export type setStorageDataType = (args: setStorageDataArgs) => Promise<void>;

export type setStorageDataArgs = quizRecordDataArgs;
type quizRecordDataArgs = {
  key: 'quizRecord';
  value: QuizRecordData;
};

export type QuizRecordData = {
  records: QuizRecord[];
  totalElements: number;
  incorrectRecords: IncorrectQuizRecord[];
};

export type getStorageDataType = <T = any>(
  key: storageKey,
) => Promise<T | null>;
