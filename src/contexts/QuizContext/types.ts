export type QuizContextType = {
  state: QuizContextState;
  setState: QuizContextSetState;
  unmountQuizPage(): void;
};

export type QuizContextState = {
  /** 선택한 카테고리 idx */
  categoryIdx: number;
  /** 선택한 난이도 idx */
  levelIdx: number;
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
};
