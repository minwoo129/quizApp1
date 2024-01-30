import {QuestionAnswer} from '../../../common/CommonQuestionGrid/types';

export interface QuizItemProps {
  question: QuestionAnswer;
  idx: number;
}

export interface QuizItemBadgeProps {
  isSelected: boolean;
  isCorrect: boolean;
}

export interface BodyProps {}
