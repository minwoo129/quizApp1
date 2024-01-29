export interface QuizInfoFooterBtnProps {
  onPressQuizStart(): void;
  quizStartBtnDisabled: boolean;
}

export interface QuizQuestionFooterProps {
  visible: boolean;
  onPressNext(): void;
}
