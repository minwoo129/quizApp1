export type QuizContextType = {
  //state: QuizContextState
};

export type QuizContextState = {
  questions: Question[];
};

export type Question = {
  type: string;
  difficulty: 'easy' | 'medium' | 'hard';
};
