import {QuizContextSetState, QuizContextState} from './types';

export const QuizContextDefaultState: QuizContextState = {
  /** 선택한 카테고리 idx */
  categoryIdx: 0,
  /** 선택한 난이도 idx */
  levelIdx: 0,
};

export const QuizContextDefaultSetState: QuizContextSetState = {
  /**
   * 선택한 카테고리 idx 설정
   * - 연결 데이터: categoryIdx
   */
  setCategoryIdx: (idx: number) => {},
  /**
   * 선택한 난이도 idx 설정
   * - 연결 데이터: levelIdx
   */
  setLevelIdx: (idx: number) => {},
};
