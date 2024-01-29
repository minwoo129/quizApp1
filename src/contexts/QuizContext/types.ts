import {QuestionAnswer} from '../../component/common/CommonQuestionGrid/types';

export type QuizContextType = {
  state: QuizContextState;
  setState: QuizContextSetState;
  unmountQuizPage(): void;
  addQuestionAnswer: addQuestionAnswer;
};

export type QuizContextState = {
  /** 선택한 카테고리 idx */
  categoryIdx: number;
  /** 선택한 난이도 idx */
  levelIdx: number;
  /** 현재 문제 페이지 */
  currentQuestionIdx: number;
  /** 문제 및 선택값 정보 */
  questionAnswers: QuestionAnswer[];
};

export type QuizContextSetState = {
  /**
   * 선택한 카테고리 idx 설정
   * - 연결 데이터: categoryIdx
   */
  setCategoryIdx: (idx: number) => void;
  /**
   * 선택한 난이도 idx 설정
   * - 연결 데이터: levelIdx
   */
  setLevelIdx: (idx: number) => void;
  /**
   * 현재 문제 페이지 설정
   * - 연결 데이터: currentQuestionIdx
   */
  setCurrentQuestionIdx: (idx: number) => void;
  /**
   * 문제 및 선택값 정보 설정
   * - 연결 데이터: questionAnswers
   */
  setQuestionAnswers: (questionAnswers: QuestionAnswer[]) => void;
};

// ===================================================================
export type addQuestionAnswer = (questionAnswer: QuestionAnswer) => void;
