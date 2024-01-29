import {QuestionAnswer} from '../../../common/CommonQuestionGrid/types';

export interface QuizInfoFooterBtnProps {
  onPressQuizStart(): void;
  quizStartBtnDisabled: boolean;
}

export interface QuizQuestionFooterProps {
  visible: boolean;
  onPressNext(): void;
}

export interface TakenTimeProps {}

export interface QuizResultCountProps {}

export interface QuizResultCountItemProps {
  title: string;
  count: number;
  type: 'total' | 'correct' | 'wrong';
}

export interface QuizDetailResultProps {}

export interface QuizDetailResultItemProps {
  answerData: QuestionAnswer;
  idx: number;
}
