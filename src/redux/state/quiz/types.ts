import {QuestionAnswer} from '../../../component/common/CommonQuestionGrid/types';

export type initialStateType = {
  /** 질문 목록 */
  questions: QuestionItem[] | null;
  /** 질문 카테고리 목록 */
  categorys: Categorys;
  /** 퀴즈 기록 */
  quizRecords: QuizRecord[];
  /** 오답 기록 */
  incorrectQuizRecords: IncorrectQuizRecord[];
};

export interface Question {
  /** 문제 타입: multiple, boolean 등 */
  type: string;
  /** 난이도 */
  difficulty: difficultyType;
  /** 카테고리 */
  category: string;
  /** 문제 */
  question: string;
  /** 정답 */
  correct_answer: string;
  /** 오답 목록 */
  incorrect_answers: string[];
}

export type difficultyType = 'easy' | 'medium' | 'hard';

export interface QuestionItem extends Question {
  /** 선택지 */
  answers: string[];
}

export type Categorys = {
  [key in string]: number;
};

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

export type IncorrectQuizRecord = {
  createdAt: string;
  question: QuestionAnswer;
  idx: number;
};
