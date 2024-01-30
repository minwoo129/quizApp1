import {initialStateType} from './types';

export const initialState: initialStateType = {
  /** 질문 목록 */
  questions: null,
  /** 질문 카테고리 목록 */
  categorys: {
    '카테고리 선택': -1,
    'General Knowledge': 9,
    'Entertainment: Books': 10,
    'Entertainment: Film': 11,
    'Entertainment: Music': 12,
    'Board Games': 16,
    'Science & Nature': 17,
    'Science: Computers': 18,
    'Science: Mathematics': 19,
    Sports: 21,
    Geography: 22,
    History: 23,
    Vehicles: 28,
  },
  /** 퀴즈 기록 */
  quizRecords: [],
  /** 오답 기록 */
  incorrectQuizRecords: [],
};
