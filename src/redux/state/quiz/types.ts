export type initialStateType = {
  /** 질문 목록 */
  questions: QuestionItem[] | null;
  /** 질문 카테고리 목록 */
  categorys: Categorys;
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
